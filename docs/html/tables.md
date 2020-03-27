# Tables

## HTML Tables

## Creating a Table

To display data in a table you need the table element.\

```text
# Table row 
The first step in entering data into the table is to add rows using the table row element: ```<tr></tr>
```

## Table Headings

This is the top row of a table, and can be defined using the tags `<th></th>`

These tags can also be but in a container to split it from the rest of the table.

```text
Note, also, the use of the ```scope=""``` attribute inside the first th tag, which can take one of two values:

row - this value makes it clear that the heading is for a row.

col - this value makes it clear that the heading is for a colum.

Example
```<th scope="col">sunday</th>
```

## Table borders

Tables you’ve created have been a little difficult to read because they have no borders.

In CSS this can be achieved. `table, td {border: 1px solid black; }`

## Example

```text
<table>
    <thead>
      <tr>
        <th>Company Name</th>
        <th>Number of Items to Ship</th>
        <th>Next Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Adam's Greenworks</td>
        <td>14</td>
        <td>Package Items</td>
      </tr>
      <tr>
        <td>Davie's Burgers</td>
        <td>2</td>
        <td>Send Invoice</td>
      </tr>
      <tr>
        <td>Baker's Bike Shop</td>
        <td>3</td>
        <td>Send Invoice</td>
      </tr>
      <tr>
        <td>Miss Sally's Southern</td>
        <td>4</td>
        <td>Ship</td>
      </tr>
      <tr>
        <td>Summit Resort Rentals</td>
        <td>4</td>
        <td>Ship</td>
      </tr>
      <tr>
        <td>Strike Fitness</td>
        <td>1</td>
        <td>Enter Order</td>
      </tr>
    </tbody>
    <tfoot>
      <td>Total</td>
            <td>28</td>
    </tfoot>
  </table>
```

