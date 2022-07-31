# Hidelement

Browser extensions for hiding stuff on web pages.

## Installation

### Firefox - Production

#### Step 1

Make sure your `manifest.json` includes this block somewhere.

```json
"browser_specific_settings": {
  "gecko": {
    "id": "youremail@gmail.com"
  }
}
```

#### Step 2

Publish to AOM.

-----

### Firefox - Nightly / Developer Builds

#### Step 1

Make sure your `manifest.json` includes this block somewhere.

```json
"browser_specific_settings": {
  "gecko": {
    "id": "youremail@gmail.com"
  }
}
```

[More info](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings)

#### Step 2

Zip the extension without `.git` files and without compressing anything.

```bash
# from the root of the firefox folder
zip -r -FS ../hidelement.zip * --exclude '*.git*'
```

#### Step 3

Disable signature checks, so you can install your extension without signing it.

Go to `about:config` and then lookup `xpinstall.signatures.require` then toggle it to `false`.

#### Step 4

Go to `about:addons` and open the options menu. Select `Install Add-on from file`.

Choose the ZIP file you created earlier.

**NOTE**: If Firefox tells you that your extension is corrupt

#### Step 5

Turn back on signature checks to avoid getting clowned on.

<p/>

------

### Chrome

TBD

