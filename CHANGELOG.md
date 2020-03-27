# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.10.0](https://github.com/assisrafael/react-bootstrap-utils/compare/v0.9.0...v0.10.0) (2020-03-27)


### Features

* **forms:** allow deep objects and arrays as form control names ([9d0d1dd](https://github.com/assisrafael/react-bootstrap-utils/commit/9d0d1dd11acf62212fd91b4725791797f34303b3))
* **utils:** include getters and setters utils ([0b46d08](https://github.com/assisrafael/react-bootstrap-utils/commit/0b46d085e4ee10d7e2d85c0e7a951d71ef19887e))

## [0.9.0](https://github.com/assisrafael/react-bootstrap-utils/compare/v0.8.5...v0.9.0) (2020-03-27)


### Bug Fixes

* **FormAutocomplete:** clear search value onBlur if no option was selected ([3004f4b](https://github.com/assisrafael/react-bootstrap-utils/commit/3004f4bde55fa9d5f4eb01cf0e0242de3661796d))
* **FormAutocomplete:** fix FormAutocomplete validation feedback ([6a67e45](https://github.com/assisrafael/react-bootstrap-utils/commit/6a67e451ea8a0a733083dd2d1550e17560b4bc25))
* **forms:** reset submitAttempted state on form reset ([4be36e2](https://github.com/assisrafael/react-bootstrap-utils/commit/4be36e2c9016524604741ae6ba8ce3e95e21eba1))

### [0.8.5](https://github.com/assisrafael/react-bootstrap-utils/compare/v0.8.4...v0.8.5) (2020-03-25)


### Features

* **forms:** extract and exports "useFormControl" (custom hook) to allow external custom form elements ([c37b955](https://github.com/assisrafael/react-bootstrap-utils/commit/c37b955b2e38acacbbffc2e6eebf73785722cb3e))


### Bug Fixes

* **forms:** change onCancel prop-type to optional ([57bcdb8](https://github.com/assisrafael/react-bootstrap-utils/commit/57bcdb875a511f4d4ef3eb31eb0e36179e361a4f))
* **tabs:** change tab title prop-types to allow jsx content ([8ac7cb6](https://github.com/assisrafael/react-bootstrap-utils/commit/8ac7cb63dbca1b6b05a6ac13ec3777b323416fbc))

### [0.8.4](https://github.com/assisrafael/react-bootstrap-utils/compare/v0.8.3...v0.8.4) (2020-03-25)


### Features

* **forms:** allow custom form actions ([52861bd](https://github.com/assisrafael/react-bootstrap-utils/commit/52861bd014e2c8d73698c52ee6e0164a747a2882))


### Bug Fixes

* **toasts:** fix prop-types warning about multiple children ([8dbe04c](https://github.com/assisrafael/react-bootstrap-utils/commit/8dbe04c12679d916d588bf69a05f5316f0a688f1))

### [0.8.3](https://github.com/assisrafael/react-bootstrap-utils/compare/v0.8.2...v0.8.3) (2020-03-25)

### [0.8.2](https://github.com/assisrafael/react-bootstrap-utils/compare/v0.8.1...v0.8.2) (2020-03-19)


### Bug Fixes

* **forms:** form elements validation should be optional ([74b32e9](https://github.com/assisrafael/react-bootstrap-utils/commit/74b32e95ebc41ecfb0bd896d80a5717de9e65d39))

### [0.8.1](https://github.com/assisrafael/react-bootstrap-utils/compare/v0.8.0...v0.8.1) (2020-03-19)


### Features

* **table:** allow table column header customization ([4f46927](https://github.com/assisrafael/react-bootstrap-utils/commit/4f46927ae176f24e2c4f53a081b19e870848d695))

## [0.8.0](https://github.com/assisrafael/react-bootstrap-utils/compare/v0.7.0...v0.8.0) (2020-03-19)


### Features

* **forms:** allow using bootstrap form validation feedback ([39e0c81](https://github.com/assisrafael/react-bootstrap-utils/commit/39e0c81bce4a552aa54ea75ae07e4b5e8058c3c2))
* **forms:** implement custom form element validations ([e8061ca](https://github.com/assisrafael/react-bootstrap-utils/commit/e8061ca999c8e5f7dc6aa3d836a2bbb89a3b3959))
* **forms:** show validation messages bellow form elements ([2f6e3a5](https://github.com/assisrafael/react-bootstrap-utils/commit/2f6e3a5a6894754e838a5cb7b6ef86936b25625d))
* **toasts:** implement toast components ([3e94bf1](https://github.com/assisrafael/react-bootstrap-utils/commit/3e94bf1c0886d9cacda553b7fd9750ff74a1e071))


### Bug Fixes

* **forms:** include missing validation properties do FormInput ([927f23e](https://github.com/assisrafael/react-bootstrap-utils/commit/927f23ecb1ffc338509f2cc729d11ab6bc6995c7))

## [0.7.0](https://github.com/assisrafael/react-bootstrap-utils/compare/v0.6.0...v0.7.0) (2020-03-18)


### Features

* **dropdown:** implement Dropdown component ([6c84a5b](https://github.com/assisrafael/react-bootstrap-utils/commit/6c84a5bd28f8d69f5d4a0bcebe0e270ecc3d48b8))
* **forms:** implement FormAutocomplete and FormGroupAutocomplete ([05dab8e](https://github.com/assisrafael/react-bootstrap-utils/commit/05dab8e579c29551f0bd4e98821b23934889aa98))


### Bug Fixes

* **list-group:** fix ListGroupItem propTypes ([48909ae](https://github.com/assisrafael/react-bootstrap-utils/commit/48909ae0d77b3a84c10d77f7bca553d43f22b18c))
* **modal:** remove event listener on clean up ([94fec85](https://github.com/assisrafael/react-bootstrap-utils/commit/94fec855be484c89538e0cd0af825b38182f3383))

## [0.6.0](https://github.com/assisrafael/react-bootstrap-utils/compare/v0.5.3...v0.6.0) (2020-03-17)


### Features

* **dialog:** implement Dialog, AlertDialog and ConfirmationDialog ([ccd6bb8](https://github.com/assisrafael/react-bootstrap-utils/commit/ccd6bb8c44223ef163047ac6af9ded9665b72d43))
* **list-group:** implement ListGroup and StatefulListGroup ([97908e7](https://github.com/assisrafael/react-bootstrap-utils/commit/97908e7a9ebbe9894db43a178a880a8b0dc69a70))

### [0.5.3](https://github.com/assisrafael/react-bootstrap-utils/compare/v0.5.2...v0.5.3) (2020-03-16)

### [0.5.2](https://github.com/assisrafael/react-bootstrap-utils/compare/v0.5.1...v0.5.2) (2020-03-16)

### [0.5.1](https://github.com/assisrafael/react-bootstrap-utils/compare/v0.5.0...v0.5.1) (2020-03-13)

## [0.5.0](https://github.com/assisrafael/react-bootstrap-utils/compare/v0.4.0...v0.5.0) (2020-03-10)


### Features

* **pagination:** implement <Pagination> component ([e6d10f8](https://github.com/assisrafael/react-bootstrap-utils/commit/e6d10f8ba3c779ddc38457b8419df68a733327b7))
* **tabs:** allow initial tab configuration ([f553213](https://github.com/assisrafael/react-bootstrap-utils/commit/f553213c382f4fbc54cfe3b704af44f19d7a56a6))

## [0.4.0](https://github.com/assisrafael/react-bootstrap-utils/compare/v0.3.0...v0.4.0) (2020-03-10)


### Features

* **tabs:** implement <Tabs> and <StatefulTabs> components ([46121b9](https://github.com/assisrafael/react-bootstrap-utils/commit/46121b97f29a460edcb8eed59bd51271d45d3dc7))


### Bug Fixes

* include missing propTypes definitions and fix eslint warnings ([0f1c85b](https://github.com/assisrafael/react-bootstrap-utils/commit/0f1c85b415410a671eed3685d2cbeea9fa2f97c2))

## [0.3.0](https://github.com/assisrafael/react-bootstrap-utils/compare/v0.2.4...v0.3.0) (2020-03-05)


### Features

* **table:** allow table actions ([d77f4d8](https://github.com/assisrafael/react-bootstrap-utils/commit/d77f4d829a6faf52047f8dbd874d24c2df310205))
* **table:** include table cell value formatting ([c0be209](https://github.com/assisrafael/react-bootstrap-utils/commit/c0be209eb1aec6c65c0fe88058df7bf03d6fb98f))

### [0.2.4](https://github.com/assisrafael/react-bootstrap-utils/compare/v0.2.3...v0.2.4) (2020-03-05)


### Bug Fixes

* **forms:** include an option to change the FormInput type ([7313d75](https://github.com/assisrafael/react-bootstrap-utils/commit/7313d75cb92ce6c1015dc605713bf074a3263703))

### [0.2.3](https://github.com/assisrafael/react-bootstrap-utils/compare/v0.2.2...v0.2.3) (2020-03-04)

### Features

- **table:** allow column alignment ([1865b9f](https://github.com/assisrafael/react-bootstrap-utils/commit/1865b9fdee29e3b5f02113e7e986449690114687))
- **table:** allow table captions ([103c7e4](https://github.com/assisrafael/react-bootstrap-utils/commit/103c7e483b12f3f59e7b2eca355ec3185eaed112))
- **table:** include style options to the table, rows and columns ([00eeb0a](https://github.com/assisrafael/react-bootstrap-utils/commit/00eeb0a23ffcafbbc5e2519a78f022f79122cb4e))
- **table:** make every table responsive ([0aa78ca](https://github.com/assisrafael/react-bootstrap-utils/commit/0aa78ca743d0f8d0ea8048d578b3941e694bdb5c))

### [0.2.2](https://github.com/assisrafael/react-bootstrap-utils/compare/v0.2.1...v0.2.2) (2020-03-04)

### Features

- **table:** implement \<Table> component ([8eceed6](https://github.com/assisrafael/react-bootstrap-utils/commit/8eceed675571c7735bb484128d7f59dd679f9d5f))

### Bug Fixes

- **forms:** remove debug from \<Form> component ([d64c136](https://github.com/assisrafael/react-bootstrap-utils/commit/d64c13631e6051a87fde756ed27d492b4659c09b))

### [0.2.1](https://github.com/assisrafael/react-bootstrap-utils/compare/v0.2.0...v0.2.1) (2020-03-04)
