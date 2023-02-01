# Chrome / Firefox Extensions Template

This is a Chrome & Firefox Extension boilerplate built with React (+ Styled components).

It uses Webpack to bundle the app and supports auto reloading out of the box.

## Differences between Chrome and Firefox

This extension works on Chrome and Firefox. Currently Firefox supports Manifest V2, where as Chrome supports V2 and V3.

They primary difference between the two are V3 uses a service worker, rather than a background webpage - however both use the same code (`app.background.ts`) for this app.

The rest works out of the box with no designated code for each.

> Note: Manifest V2 is actually deprecated in Chrome and will be removed in 2023

## Development

### Requirements

- Node: [version](./.nvmrc)
- Yarn

### Install

Run `yarn`

### Compile and watch for changes

Run `yarn run dev`

This will run a webpack watch server which will automatically refresh the extension on any changes.

- `Popup` app changes will refresh the popup if its either open or closed
- `Content` app changes will refresh the current page on changes
- `Background` app changes will refresh the background page on changes

> Note: The package used to perform the refresh does not support Service Workers (manifest V3). To get around this issue, manifest V2 is used for development

### Add dev extension to chrome

1. Navigate to your [Chrome Extensions page](chrome://extensions/)

2. In the top right toggle `Developer Mode` on.

3. Click the `Load unpacked` button. This will enable you to load your local files into an extension.

4. Navigate to your `*project*/dist` directory and click `select`.

5. You should now have your extension loaded.

### Build for production

`yarn build-manifest-v3`: Builds production source for Manifest V3 (Chrome)

`yarn build-manifest-v2`: Builds production source for Manifest V2 (Firefox)

Both of the above build to the `./dist/` directory and create a zip file `Extension.zip` within it.

## What are the different apps?

### Content

`@content/app.content.tsx`
This app is the Content Script. Meaning this JS will run on page.

### Popup

`@popup/app.popup.tsx`
This is the Popup script. Meaning that when you click on the icon beside the address bar it will be used. Webpack generates a HTML page and appends the compiled JS to it.

### Background

This is the service worker/background page script. This runs constantly while Chrome is running.
Click on `service worker` (or `background page` for dev) to inspect it.

## Attributions

[Settings icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/settings)
