# RIVROSS deployment

The repository is configured for GitHub Pages through `.github/workflows/pages.yml`.

Repository: https://github.com/leonislam81/rivross-custom-website

After the workflow completes, the site is available from the repository's **Settings → Pages** area. The workflow deploys the `main` branch automatically on every push.

For local work:

```text
python -m http.server 8080
```

Then open `http://127.0.0.1:8080/`.
