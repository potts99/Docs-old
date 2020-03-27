---
id: html-forms
title: HTML forms
---

An overview of forms in HTML

```text
<form action="/example.html" method="POST">
</form>
```

In the above example, we’ve created the skeleton for a form that will send information to example.html as a POST request — the action attribute determines where the information is sent and the method attribute is assigned a HTTP verb that is included in the HTTP request. \(Note: HTTP verbs like POST do not need to be capitalized for the request to work, but it’s done so out of convention. In the example above we could have written method="post" and it would still work\).

## A form with input

```text
 <form action="/example.html" method="POST">
  <input type="text" name="first-text-field">
</form>
```

Adding the label property before the input can be used. `<label for="username">Username:</label>`

Uisng `<input type ="password">` using this will replace input text with another character like an asterisk \(\*\) or a dot \(•\)

Example

```text
 <label for="user-pw">Password:</label>
        <!--Add your code below-->
                <input type="password" name="user-pw" id="user-pw">
```

## Number Input

By setting type="number" you can restrict what users type into the input field to just numbers

We can also provide a step attribute which creates arrows inside the input field to increase or decrease by the value of the step attribute, like a ticker for the form.

## Type

type="text" allows you to write text in the box

type="password" turns letters into dots

## Validation

Simply use the `required` attribute inside the input tag to ensure the user has to type something in the box

You can also use min and max attributes for numbers.

```text
<input type="number" name="guess" id="guess" required min="1" max="10">
```

You can do the same for letters using `minLength` and `mxLength`

we could also add a validation to check how the text was provided. For cases when we want user input to follow specific guidelines, we use the pattern attribute.

If wanted to check for a valid credit card number \(a 14 to 16 digit number\). We could use the regex: \[0-9\]{14,16} which checks that the user provided only numbers and that they entered at least 14 digits and at most 16 digits

`<input id="payment" name="payment" type="text" required pattern="[0-9]{14,16}">`

