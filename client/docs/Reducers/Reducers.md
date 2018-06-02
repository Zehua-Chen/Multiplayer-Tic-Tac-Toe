# Reducers

Reducers applies the changes carried by actions to the state.

**Important**: reducers are fed with the sub state that they are bound to, not the who state.

## Workflow

1. **Create a new state (modifying existing state will not trigger a rerender)**, 
2. Modifies the new state;
3. Returns the new state.

## Reducers