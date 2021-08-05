## yarn berry issue repro repo

This repo shows and example of a scenario which typescript-patch from yarn plugin compat library fails to handle properly. This cannot be verified with yarn sandbox since this only affects any application that wants to use the `tsserver` and not `tsc` - for example: vscode.

To repro the issue, clone this repo and open it in vscode (make sure to pick workspace's ts version in vscode)