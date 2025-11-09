```markdown
# csgoshit — GitHub Pages map download site

This repository now contains a simple static website in the `docs/` folder that lists map files and provides direct download links. The site is intended to be served with GitHub Pages (select the `docs/` folder in Pages settings).

How it works

- docs/index.html is a static front-end that reads docs/maps.json and renders a list of maps.
- Downloads point to raw files stored in the repository under the `maps/` folder using raw.githubusercontent.com links.

Steps to finish setup

1. Enable GitHub Pages in repository settings and pick "Deploy from a branch" -> Branch: `main`, Folder: `/docs`.
2. Add your actual .bsp files to the `maps/` folder on the `main` branch.
3. Update `docs/maps.json` with entries for each map (name, file, optional description and size).

Example maps.json entry

```json
{
  "name": "de_awesome",
  "file": "de_awesome.bsp",
  "description": "A community-made competitive map",
  "size": "23 MB"
}
```

Notes

- Raw GitHub URLs are used for downloads. Large files will increase repository size; if you expect many large maps, consider using an external storage (S3, Git LFS, or a CDN) and update the `file` or `download` links accordingly.
```