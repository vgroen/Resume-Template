# Multilingual Resume Template

A lightweight, framework-free, one-page resume generator built with HTML, CSS
(SCSS), and vanilla JavaScript ([demo](https://vgroen.github.io/Resume-Template/)).

I created this template to easily generate and maintain a clean, professional
resume in multiple languages without having to deal with heavy dependencies,
build tools, or complex software. It separates data from design, allowing you to
update your content via a simple configuration object and render it instantly in
the browser.

## Getting Started

1. Clone or download this repository.
2. Open `index.html` in a web browser (no local server required).
3. To generate the PDF, use the browser's built-in print function.

### Exporting to PDF

This template was built and tested exclusively in Firefox. Because browser
rendering engines might handle print layouts (like `@page` rules, margins, and
CSS Grids) differently, results might differ in other browsers.

To export correctly, make sure to use the following print settings:
*   Press `Ctrl+P` (or `Cmd+P` on Mac).
*   **Destination:** Save as PDF.
*   **Paper size:** A4.
*   **Margins:** None (or 'Default', depending on your browser).
*   **Options:** Check the box for **Background graphics** (crucial for rendering the icons, background colors, and timeline lines).

## Configuration (The `LANG` Object)

All content and translations are managed from the `LANG` object inside the
configuration file (e.g., `example.js`). 

**Almost everything is optional & accepts HTML!**
Because the JavaScript handles data injection dynamically and without sanitization,
**almost every field is optional**. If you leave a field out, the template will
simply adapt and hide that element. Furthermore,
**every string field accepts raw HTML**. This means you can freely use tags like
`<b>`, `<i>`, `<br>`, or `<a>` inside titles, descriptions, and notes for
more styling flexibility.

Here is an overview of the primary fields in the `LANG` object:

### `headers`
* **Fields:** `education`, `experience`, `projects`, `skills`.
* **Format:** Strings. Translated or alternate titles for the main sections.

### `personal`
* **Fields:** `name`, `mail`, `phone`, `linkedin`, `github`, `description`.
* **Format:** Strings.
* **`portrait`:** An object that allows scaling and offsetting the image in the frame, formatted as `{ "src": "path/to/image.jpg", "position": { "x": "50%", "y": "50%" }, "scale": "100%" }`.

### Timeline Blocks (`education` & `experience`)
Arrays containing objects that populate the vertical timeline. Because they
share the exact same internal structure, they support the same fields:
* `date-range`: An array of strings, e.g., `["2023", "2020"]`. The first value displays on top.
* `title`, `institution`, `location`: Strings for the job/degree, company/school, and location.
* `short-bar`: Boolean. Set to `true` to alter the timeline line rendering for shorter periods.
* `grade`: String. Adds a prefix before the title (e.g., use `"bsc"` or `"msc"`).
* `notes`, `description`: Strings. Space for extra context, honors, or responsibilities.

### Itemize Blocks (`projects` & `skills`)
Arrays containing objects that populate the simple list sections. They share the
same structure:
* `title`: String. The project name or skill category.
* `description`: String. Explanation of the project or a comma-separated list of skills.
* `notes`: String. Space for extra context, such as an `<a>` tag linking to a repository.
* `items`: An array of strings to build bullet-lists.

