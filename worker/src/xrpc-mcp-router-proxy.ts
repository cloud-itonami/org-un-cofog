// SVELTEKIT-BACKEND-PRESERVED: moved out of svelte/ during the cljs migration; not wired.
//
// Moved verbatim from `svelte/src/routes/xrpc/[...path]/+server.ts` (only
// this header comment was added; the handler logic below is byte-for-byte
// unchanged). That file no longer existed in this repo when this frontend
// migration started — a prior, non-conforming pass (commit `34166ac`,
// "migrate open-cofog worker UI from svelte to cljs") had already deleted
// `worker/svelte/` wholesale, including this file, without preserving it
// anywhere. It was recovered byte-for-byte from
// `34166ac623dafdc7013013f7a49b9064c06ed8f4^1:worker/svelte/src/routes/xrpc/[...path]/+server.ts`
// via `git show`.
//
// It still imports from '@sveltejs/kit' and './$types' (SvelteKit's
// codegen'd route types), neither of which resolves now that the
// SvelteKit toolchain (`worker/svelte/`) is gone — so it does not run
// as-is. Before commit `34166ac`, `worker/wrangler.jsonc`'s `main` pointed
// at the SvelteKit build output
// (`svelte/.svelte-kit/cloudflare/_worker.js`), which this route's
// generic XRPC-to-MCP-router forwarding was compiled into — that was the
// worker's only live XRPC surface at the time. `main` now points at
// `worker/src/app.ts`, which implements its own, unrelated
// `/xrpc/com.etzhayyim.apps.openCofog.*` GET routes and never imports or
// calls this file, so this generic POST proxy is not currently wired to
// any deploy target.
//
// Whether/how to revive this XRPC proxy (e.g. rewritten as a plain
// Cloudflare Worker fetch handler with no SvelteKit dependency, and
// composed with app.ts's own routing) is an open product decision, not
// something this frontend migration decides.

import { json, type RequestEvent } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const DEFAULT_MCP_ROUTER_URL = 'https://mcp.etzhayyim.com/xrpc/com.etzhayyim.mcp.message';
type Env = Record<string, unknown> & { AGENTGATEWAY_MCP_ROUTER_URL?: string; MCP_ROUTER_URL?: string };
function envOf(event: RequestEvent): Env { return ((event.platform as { env?: Env } | undefined)?.env ?? {}) as Env; }
function mcpRouterUrl(env: Env): string { const configured = typeof env.AGENTGATEWAY_MCP_ROUTER_URL === 'string' && env.AGENTGATEWAY_MCP_ROUTER_URL.trim() ? env.AGENTGATEWAY_MCP_ROUTER_URL : typeof env.MCP_ROUTER_URL === 'string' && env.MCP_ROUTER_URL.trim() ? env.MCP_ROUTER_URL : DEFAULT_MCP_ROUTER_URL; return configured.replace(/\/+$/, ''); }
function noStore(body: unknown, init: ResponseInit = {}): Response { const headers = new Headers(init.headers); headers.set('cache-control', 'no-store'); return json(body, { ...init, headers }); }
export const POST: RequestHandler = async (event) => { const nsid = event.params.path; if (!nsid) return noStore({ error: 'Missing XRPC method' }, { status: 400 }); const input = await event.request.json().catch(() => ({})); const headers = new Headers(event.request.headers); headers.delete('host'); headers.set('content-type', 'application/json'); headers.set('x-etzhayyim-bff', 'sveltekit-edge-bff'); headers.set('x-etzhayyim-xrpc-method', nsid); const upstream = await fetch(mcpRouterUrl(envOf(event)), { method: 'POST', headers, body: JSON.stringify({ jsonrpc: '2.0', id: crypto.randomUUID(), method: 'tools/call', params: { name: nsid, arguments: input } }) }); const upstreamText = await upstream.text(); let payload: unknown = upstreamText; try { payload = upstreamText ? JSON.parse(upstreamText) : null; } catch { /* Preserve text payload. */ } if (!upstream.ok) return noStore({ error: 'MCP router request failed', upstream: payload }, { status: upstream.status }); if (payload && typeof payload === 'object' && 'error' in payload) { const error = (payload as { error?: { message?: string } }).error; return noStore({ error: error?.message ?? 'MCP router returned an error', upstream: payload }, { status: 502 }); } const result = payload && typeof payload === 'object' && 'result' in payload ? (payload as { result?: unknown }).result : payload; const structured = result && typeof result === 'object' && 'structuredContent' in result ? (result as { structuredContent?: unknown }).structuredContent : result; return noStore(structured ?? {}); };
export const OPTIONS: RequestHandler = async () => new Response(null, { status: 204, headers: { 'access-control-allow-origin': '*', 'access-control-allow-methods': 'POST,OPTIONS', 'access-control-allow-headers': 'content-type,authorization', 'access-control-max-age': '86400' } });
