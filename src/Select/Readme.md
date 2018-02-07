```
const colors = [
  { name: 'Apple Green', hex: '#78A300' },
  { name: 'Verdigris', hex: '#37B8AF' },
  { name: 'Pelorous', hex: '#30AABC' },
  { name: 'Mandy', hex: '#EB4962' },
  { name: 'Persimmon', hex: '#FF6D5A' },
  { name: 'Flamingo', hex: '#EB6651' },
  { name: 'Sea Buckthorn', hex: '#F79A3E' },
  { name: 'Golden Dream', hex: '#EFC93D' }
]

const ColorSample = ({ color }) => (
  <View style={{
    backgroundColor: color.hex,
    height: '14px',
    width: '14px'
  }} />
)

const Color = ({ color, includeSample }) => (
  includeSample
    ? (
      <Grid>
        <ColorSample color={color} /> {color.name} ({color.hex})
      </Grid>
    )
    : (
      <View>
        {color.name} (<Text style={{ color: color.hex }}>{color.hex}</Text>)
      </View>
    )
)

initialState = { value: colors[0] };

<Select
  label='Select your favorite color:'
  hint='It better be Pelorous'
  selected={<Color color={state.value} />}
  onChange={ value => setState({ value }) }
>
  {
    colors.map(color => (
      <Select.Item value={color} key={color.hex}>
        <Color color={color} includeSample />
      </Select.Item>
    ))
  }
</Select>
```

Validation:

```
initialState = {
  errorState: 'foo',
  warningState: 'foo',
  successState: 'foo'
};

<Grid columns={1} stretched>
  <Select
    label='Error:'
    selected={ state.errorState }
    onChange={ value => setState({ errorState: value }) }
    validation='error'
    validationText='We crashed!'
  >
    <Select.Item value='foo'>foo</Select.Item>
    <Select.Item value='bar'>bar</Select.Item>
    <Select.Item value='baz'>baz</Select.Item>
  </Select>
  <Select
    label='Warning:'
    selected={ state.warningState }
    onChange={ value => setState({ warningState: value }) }
    validation='warning'
    validationText='You may want to pull up now!'
  >
    <Select.Item value='foo'>foo</Select.Item>
    <Select.Item value='bar'>bar</Select.Item>
    <Select.Item value='baz'>baz</Select.Item>
  </Select>
  <Select
    label='Success:'
    selected={ state.successState }
    onChange={ value => setState({ successState: value }) }
    validation='success'
    validationText='We have landed safely.'
  >
    <Select.Item value='foo'>foo</Select.Item>
    <Select.Item value='bar'>bar</Select.Item>
    <Select.Item value='baz'>baz</Select.Item>
  </Select>
</Grid>
```

```
initialState = { first: 'foo', second: 'foo' };

<Grid columns={1} stretched>
  <Select
    label='Small'
    onChange={ value => setState({ first: value }) }
    selected={ state.first }
    size='small'
  >
    <Select.Item value='foo'>foo</Select.Item>
    <Select.Item value='bar'>bar</Select.Item>
    <Select.Item value='baz'>baz</Select.Item>
  </Select>
  <Select
    label='Medium'
    onChange={ value => setState({ second: value }) }
    selected={ state.second }
    size='medium'
  >
    <Select.Item value='foo'>foo</Select.Item>
    <Select.Item value='bar'>bar</Select.Item>
    <Select.Item value='baz'>baz</Select.Item>
  </Select>
</Grid>
```

Disabled:

```
initialState = { value: 'foo' };

<Select
  disabled
  selected={ state.value }
  onChange={ value => setState({ value }) }
>
  <Select.Item value='foo'>foo</Select.Item>
  <Select.Item value='bar'>bar</Select.Item>
  <Select.Item value='baz'>baz</Select.Item>
</Select>
```

Different kinds of select items (same as [Menu](#Menu)):

```
initialState = { value: 'Two' };

<Select
  selected={ state.value }
  onChange={ value => setState({ value }) }
>
  <Select.Item value='One'>One</Select.Item>
  <Select.Item value='Two'>Two</Select.Item>
  <Select.Item value='Three' disabled>Three</Select.Item>
  <Select.Separator/>
  <Select.Item value='A'>A</Select.Item>
  <Select.Item value='B'>B</Select.Item>
  <Select.Item value='C'>C</Select.Item>
</Select>
```

Tree based Select menu:

```
initialState = { value: 'Two' };

const menuItems = () => {
  if (state.treeValue !== 'tree-items') {
    return [
      <Select.Item key='one' value='One'>One</Select.Item>,
      <Select.Item key='two' value='Two'>Two</Select.Item>,
      <Select.Item key='three' value='Three' disabled>Three</Select.Item>,
      <Select.Separator key='separator-top' />,
      <Select.NextItem key='tree-items' value='tree-items'>Nested Items</Select.NextItem>,
      <Select.Separator key='separator-bottom' />,
      <Select.Item key='a' value='A'>A</Select.Item>,
      <Select.Item key='b' value='B'>B</Select.Item>,
      <Select.Item key='c' value='C'>C</Select.Item>
    ];
  }

  return [
    <Select.PreviousItem key='tree-previous' value='tree-previous'>Previous Items</Select.PreviousItem>,
    <Select.Separator key='separator' />,
    <Select.Item key='nested-1' value="Nested Item">Nested Item</Select.Item>,
    <Select.Item key='nested-2' value="Nested Item 1">Nested Item 1</Select.Item>
  ];
};

<Select
  selected={ state.value }
  onChange={value => {
    if (value.indexOf('tree') === -1) {
      setState({ value, treeValue: '' });
    } else {
      setState({ treeValue: value });
    }
  }}
  shouldClose={value => value.indexOf('tree') === -1}
>
  {menuItems()}
</Select>
```

You can put anything in the selected value:

```
const users = [
  { name: 'Amir', avatar: './images/amir.png' },
  { name: 'Jason', avatar: './images/jason.png' }
]

initialState = { selected: users[0] }

const User = ({ name, avatar }) => (
  <Grid>
    <Avatar type='human' size='small' src={ avatar }/>
    <Text>{ name }</Text>
  </Grid>
)

const selected = state.selected;

<Select
  selected={ <User name={ selected.name } avatar={ selected.avatar } /> }
  onChange={ value => setState({ selected: value }) }
>
  {
    users.map(user => (
      <Select.Item key={user.name} value={user}>
        <User name={ user.name } avatar={ user.avatar } />
      </Select.Item>
    ))
  }
</Select>
```

Setting the max height of the menu:

```
initialState = { value: 'Two' };

<Select
  maxHeight={150}
  selected={ state.value }
  onChange={ value => setState({ value }) }
>
  <Select.Item value='One'>One</Select.Item>
  <Select.Item value='Two'>Two</Select.Item>
  <Select.Item value='Three' disabled>Three</Select.Item>
  <Select.Separator/>
  <Select.Item value='A'>A</Select.Item>
  <Select.Item value='B'>B</Select.Item>
  <Select.Item value='C'>C</Select.Item>
</Select>
```

Menu positioning same as the <a href="#menu">menu</a>:

```
const items = [
  'Done chats',
  'Served chats',
  'Triaged chats',
  'Number of agent messages',
  'Number of customer messages'
]

initialState = { value: items[0] };

<View style={{ width: '200px' }}>
  <Select
    selected={ <Ellipsis>{state.value}</Ellipsis> }
    positioning={['bottom_right', 'top_right']}
    onChange={ value => setState({ value }) }
  >
    { items.map(item => (
        <Select.Item value={item} key={item}>
          <Text style={{ whiteSpace: 'nowrap' }}>{item}</Text>
        </Select.Item>
      ))
    }
  </Select>
</View>
```

Support for RTL:

```
<Select
  dir='rtl'
  selected='Two'
>
  <Select.Item>One</Select.Item>
  <Select.Item>Two</Select.Item>
  <Select.Item>Three</Select.Item>
</Select>
```