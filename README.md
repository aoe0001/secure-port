# About the Package

Host something on a Random/Secured Port

# Installation

`npm install secure-port-process --save`

Import it into your Project:

```
const secure_port = require('secure-port-process');

secure_port({
    output: true / false,
    error_message: Your error Message,
    content: <p>Hello World!</p> // Content to host
})
```

or

```
import { secure_port } from 'secure-port-process'

secure_port({
    output: true / false,
    error_message: Your error Message,
    content: <p>Hello World!</p> // Content to host
})
```

## Options

- _output_ - Wethever there should be an output or not
- _error_message_ - Custom Error Message
- _content_ - Content to host(can be also be html)

# People who worked on this Project

aoe#4851
