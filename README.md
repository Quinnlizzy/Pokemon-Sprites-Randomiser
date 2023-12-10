# useEffect Workshop.

We will be using our newfound useEffect skills to make a random Pokemon generator. We are going to make a component PokemonViewer, which will take in a prop of `id`. When the `id` prop changes, our component will perform an HTTP request to get the Pokemon of that id and then display the data.

## Task 1:

In PokemonViewer, create a piece of state that will store a Pokemon data object along with JSX.

We'll start by fetching a single Pokemon before changing the id. Use a `useEffect` to send a fetch request to `https://pokeapi.co/api/v2/pokemon/1`. Console.log the results first to make sure your fetch is working correctly.

Once you're happy with the data that's in the console.log, use it to populate your Pokemon state and render information about the Pokemon (such as its name, id, etc.) in the JSX of the PokemonViewer component.

Check that this is rendering correctly - only then move on to task 2.

## Task 2:

In `App/index.js`, complete the TODOs so that when the button is clicked, the id changes to a random number between 1 and 151, and that id is handed down as a prop to `PokemonViewer`.

Within your useEffect you made in task 1, fetch a Pokemon from `https://pokeapi.co/api/v2/pokemon/${id}` instead and store the data in your piece of state. The useEffect should only re-run when the id changes.

You should see a different random Pokemon each time you click the button.

## Bonus:

Make a Star Wars search!

Have a component that takes in a search and displays the array of results from sending a request to this API:
`https://swapi.dev/api/people?search={search}`

## Resources

Docs:

- [Syncronizing with effects](https://react.dev/learn/synchronizing-with-effects)
- [useEffect](https://react.dev/reference/react/useEffect)
