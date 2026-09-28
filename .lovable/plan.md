# Show logo update

## What will change
- Add the supplied “Tango — La Muerte del Ángel” artwork as the official show image without cropping, stretching, retouching, or recoloring it.
- Replace the text-only show identifier in the dedicated Show page opening with the supplied artwork, while retaining the existing production label, dates, background, copy, statistics, and booking action.
- Replace the text-only show identifier in the homepage Current Production section with the same artwork, while retaining its existing description and “Enter the Show” action.
- Size the artwork responsively so its full 16:9 frame remains visible and prominent on desktop and mobile.

## Verification
- Check the homepage and Show page at desktop and mobile sizes.
- Confirm the artwork is fully visible, maintains its proportions, and no existing show content or functionality was removed.
- Confirm the preview has no build or runtime errors.

## Technical details
- Store the uploaded binary through the project’s hosted asset flow and import its generated asset pointer.
- Use semantic design tokens and existing animation patterns; no global brand logo, navigation, or unrelated page will change.
