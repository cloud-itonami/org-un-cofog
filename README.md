# open-cofog

Machine-readable UN **COFOG** (Classification of the Functions of Government,
1999, updated 2014) published one **class** at a time as JSON + a small
TypeScript accessor.

- 10 Divisions → 69 Groups → **109 Classes** — the counts in the UN's own
  published structure file, not an estimate (see **Provenance** below)
- License: Apache-2.0 (code) / public domain (UN data)

## Provenance

Every COFOG figure and class name in this repository is checked against the UN
Statistics Division's published structure file, a copy of which is committed
here and pinned by hash:

```sh
nbb scripts/cofog-provenance.cljs verify           # offline: hashes, counts, class names
nbb scripts/cofog-provenance.cljs verify --fetch   # also re-downloads and diffs against the pin
```

`data/sources.edn` records each source URL with the HTTP status, byte count and
sha256 actually observed. Only URLs that returned 200 are listed there — an
unfetchable URL is not a citation.

**What is sourced.** The level counts (10 / 69 / 109), every class code, every
class `nameEn`, and each class's `(CS)` collective / `(IS)` individual service
type all come from
[`COFOG_english_structure.txt`](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/COFOG_english_structure.txt),
independently confirmed by the French edition of the same file.

**What is not.** The `description`, `includes` and `excludes` prose in
`data/classes/*.json` is **unverified**. No machine-readable UN explanatory-note
file was found; probed 2026-08-30 and recorded here so the next reader does not
re-guess: `.../Econ/Download` → 403,
`.../In%20Text/COFOG_Spanish_structure.txt` → 404,
`.../In%20Text/COFOG_english_structure_notes.txt` → 404. Unverified is not the
same as wrong, and not the same as sourced.

**Corrections this check forced** (2026-08-30). The counts previously published
here, in `PROJECT.jsonld` and in `worker/src/classes-index.ts` were 65 groups
and 96 classes; the UN file has 69 and 109. `data/classes/0111.json` carried the
name and scope of *group* 01.1 ("Executive and legislative organs, financial and
fiscal affairs, external affairs") rather than *class* 01.1.1 ("Executive and
legislative organs"); its financial/fiscal and external-affairs material belongs
to siblings 0112 and 0113 and is now referenced there.

## Goal

Give downstream projects — fiscal dashboards, government agents, AT Protocol
public-administration actors — a stable, versioned, JSON-first COFOG dataset
without scraping the UN PDF.

## Layout

```
data/classes/{code}.json         one file per 4-digit Class (authoritative data)
worker/src/taxonomy.ts           Division + Group skeleton
worker/src/classes-index.ts      classes import index + progress counter
worker/src/app.ts                XRPC router
worker/kotodama.jsonld           profile + space + triggers
worker/wrangler.jsonc            CF Worker config
```

## XRPC

| NSID | Description |
|---|---|
| `com.etzhayyim.apps.openCofog.listDivisions` | list 10 divisions |
| `com.etzhayyim.apps.openCofog.listGroups` | list ~65 groups (filter by division) |
| `com.etzhayyim.apps.openCofog.listClasses` | list 96 classes (filter by division/group), paginated |
| `com.etzhayyim.apps.openCofog.getClass` | get one class with full description |

## DID

```
did:web:open-cofog.etzhayyim.com                    primary
did:web:open-cofog.etzhayyim.com:division:{XX}      e.g. :division:01
did:web:open-cofog.etzhayyim.com:group:{XXX}        e.g. :group:011
did:web:open-cofog.etzhayyim.com:class:{XXXX}       e.g. :class:0111
```

## Adding a new class

1. Create `data/classes/{code}.json`.
2. Append `import cXXXX from "../../data/classes/XXXX.json";` and a
   `"XXXX": cXXXX` entry to `worker/src/classes-index.ts`.
3. Bump `IMPLEMENTED_COUNT`.
4. PR + cron deploy (`*/10 * * * *`, `loop` session).

## License

Apache-2.0. UN COFOG data is public domain.
