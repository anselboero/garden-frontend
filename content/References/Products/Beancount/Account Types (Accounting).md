---
{"publish":true,"created":"2026-01-03","modified":"2026-01-04T09:26:50.387+01:00","tags":["flashcards"],"cssclasses":"","socialImage":"[[Account Types.png]]"}
---

# Summary

![[Attachments/Excalidrawings/Account Types.png]]

# Summary

There are 4 main Account types + a technical one:
- **Assets**: something you own. It can be Bank Accounts, Cash, Stocks, but also tangible properties, e.g. cars, houses, collectibles.
- **Income**: Something you earn. It can be Salary, Gift, Dividends, etc.
- **Expenses**: Something you spend. It can be Groceries, Travel, Subscriptions, Books, etc.
- **Liability**: Something you owe: It can be from car mortgage, Buy now Pay Later, taxes, etc.
- **Equity**: In the Beancount context it is used at the beginning to track the initial wealth, before you started tracking your finances. At the beginning (before tracking any spending/earning) you should have $Assets + Liabilities + Equity = 0$. Equity accounts are only used at the beginning, when moving the initial funds to their Assets/Liabilities.

Each Account has a Balance, which is updated with transactions between Accounts.
e.g. Account A having balance 10€ performs a 5€ transaction to Account B having balance 20€.
The updated balances for A and B will be 5€ and 25€. 

**Assets** and **Expenses** have positive balances, whereas
**Income** and **Liability** have negative balances.

**Assets** and **Liability** are useful to track the net worth in a specific point in time (your net worth can be , whereas **Income** and **Expenses** are helpful to analyze the spendings and earnings over a time window (e.g. in the past 6 months).
# An Example
An example might clarify the differences between the account types and the relationships between them.

We want to track our finances starting on 2026-01-01.
 Our initial wealth is 2.5k € from a Revolut Account and 50€ cash.
In order to inject the initial wealth to Revolut and Cash accounts, we need to create 2 transactions from the Opening-Balances' equity account to the Revolut and Cash accounts.

![[Attachments/Excalidrawings/Account Types-2026-01-01.png|500]]

On 2026-01-02, we paid 600€ for our flight to Albuquerque. We  start by creating a Flights Expenses Account.
In order to make things a bit more complex, let's suppose we use a Buy now Pay Later (BNPL) and decide to pay in 3 equal installments (200€ each). In this case we should also create a BNPL Account under Liabilities. And on 2026-01-02, we would have two different transfers:
- From Revolut to Flights: 200€
- From BNPL to Flights: 400€

![[Attachments/Excalidrawings/Account Types-2026-01-02.png|500]]
This is because the flight is paid for by two parties: €200 with our own money, and the remaining €400 is borrowed from the BNPL company.

When the next month we have to pay for the second installment, we will create a transaction from Revolut to BNPL accounts (Flights Account is not involved anymore, because we already have assigned 600€ on the date when we bought the ticket, 2026-01-02).

On 2026-01-03, we finally get our salary. From Salary Account we move 1k€ to Revolut Account.

![[Attachments/Excalidrawings/Account Types-2026-01-03.png|500]]

We can then infer some data:
- **Net Worth as of 2025-06-03**: it is given by **Assets** + **Liability**: 50€ + 2.4k€ + (- 400€) = 2850€
- Total Expenses in Jan-2026: By Analyzing the entries associated with Expenses Accounts and recorded in January (Flights only), we can get the total amount: 600€
- Total Income in Jan-2026: by summing up all the entries associated with Income Accounts and recorded in January (Salary only), we can get the total amount: 1k€

# Short Note
I agree that many definitions are missing (what is Double-Entry account, what are an Account and a transaction?) I will probably cover these principles in a new Card.


# Credits and References
- [The double-entry Counting Method](https://beancount.github.io/docs/the_double_entry_counting_method.html#types-of-accounts), Beancount documentation
# Licenses and Attributions
- Airplane, Bank, Netflix, Piggy bank, Restaurant, Car, Klarna icons made by [Freepik](https://www.flaticon.com/authors/freepik) from [flaticon.com](https://www.flaticon.com/)
- Mortgage icon made by [iconixar](https://www.flaticon.com/authors/iconixar) from [flaticon.com](https://www.flaticon.com/)
- Salary icon made by [nawicon](https://www.flaticon.com/authors/nawicon) from [flaticon.com](https://www.flaticon.com/) from [flaticon.com](https://www.flaticon.com/)
- Stock market icon made by [talha-dogar](https://www.flaticon.com/authors/talha-dogar)from [flaticon.com](https://www.flaticon.com/)