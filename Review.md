## Code issues

1. You should use ReactRouter instead of a modals
2. Do not access state explicitly, make use of selectors (import { createSelector } from '@redux/toolkit' )

## Feature issues

1. Form input should be cleared on add click, redirect should not happen immediately (Done)
2. Fix todos counter (Done)
3. User must be able to mark any todo as done
4. User should be able to sort by two dates (end date, creation date)
5. List should have following filters: Deleted, Done, All, Todo
6. Table should show following columns: Date End, Date Created, Title, Description
7. Add search input, search by: title, description
8. Add validation to form validation rules, it should be triggered by Add/Edit button click:

- Date End should be in a future
- Description: min length - 5, max length - 40
- Title: min length 3, max length 15
