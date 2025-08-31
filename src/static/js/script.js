// deno-lint-ignore-file no-unused-vars

function mail() {
  const x = atob("bWFpbHRv");
  const y = atob("aGVsbG9Acml0YW0ubWU=");

  document
    .querySelectorAll('a[href="javascript:mail();"]')
    .forEach((link) => {
      link.innerText = y;
      link.href = `${x}:${y}`;
    });
}
