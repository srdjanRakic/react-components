The `Modal` component is implemented to the
[W3C modal accessibility design pattern](https://www.w3.org/TR/wai-aria-practices/#dialog_modal)
and applies the correct accessibility attributes to the views listed below.

### Default Usages

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

let currentModalRef;

const initialState = {
  isModalVisible: false,
  isDanger: false,
  isLarge: false,
  isAnimated: true
};

const DefaultUsagesExample = () => {
  const triggerRef = React.useRef();

  const reducer = (state, action) => {
    switch (action.type) {
      case 'open default modal':
        return {
          isModalVisible: true
        };
      case 'open danger modal':
        return {
          isDanger: true,
          isModalVisible: true
        };
      case 'open large modal':
        return {
          isLarge: true,
          isModalVisible: true
        };
      case 'open no animation modal':
        return {
          isAnimated: false,
          isModalVisible: true
        };
      case 'close modal':
        return {
          isModalVisible: false
        };
      default:
        throw new Error('Action type not found.');
    }
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const onModalClose = () => {
    dispatch({ type: 'close modal' });
    triggerRef.current && triggerRef.current.focus();
  };

  return (
    <>
      <Grid>
        <Row>
          <Col md>
            <Button
              onClick={e => {
                triggerRef.current = e.target;
                dispatch({ type: 'open default modal' });
              }}
            >
              Open default Modal
            </Button>
          </Col>
          <Col md>
            <Button
              isDanger
              onClick={e => {
                triggerRef.current = e.target;
                dispatch({ type: 'open danger modal' });
              }}
            >
              Open danger Modal
            </Button>
          </Col>
          <Col md>
            <Button
              onClick={e => {
                triggerRef.current = e.target;
                dispatch({ type: 'open large modal' });
              }}
            >
              Open large Modal
            </Button>
          </Col>
          <Col md>
            <Button
              onClick={e => {
                triggerRef.current = e.target;
                dispatch({ type: 'open no animation modal' });
              }}
            >
              Open Modal with no animation
            </Button>
          </Col>
        </Row>
      </Grid>
      {state.isModalVisible && (
        <Modal onClose={onModalClose} isLarge={state.isLarge} isAnimated={state.isAnimated}>
          <Header isDanger={state.isDanger}>Example Header</Header>
          <Body>
            Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
            Bunya es black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce
            lettuce water chestnut eggplant winter purslane fennel azuki.
          </Body>
          <Footer>
            <FooterItem>
              <Button onClick={onModalClose} basic>
                Cancel
              </Button>
            </FooterItem>
            <FooterItem>
              <Button onClick={onModalClose} isPrimary isDanger={state.isDanger}>
                Confirm
              </Button>
            </FooterItem>
          </Footer>
          <Close aria-label="Close modal" />
        </Modal>
      )}
    </>
  );
};

<DefaultUsagesExample />;
```

### Content Focus Jail

The `Modal` component uses the [useFocusJail()](https://www.npmjs.com/package/@zendeskgarden/container-focusjail)
hook internally to limit focus and keyboard navigation
to the Modal content.

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');
const { Field, Label, Input } = require('@zendeskgarden/react-forms/src');

initialState = {
  isModalVisible: false
};

const triggerRef = React.createRef();

const onModalClose = () => {
  setState({ isModalVisible: false });
  triggerRef.current && triggerRef.current.focus();
};

<>
  <Button ref={triggerRef} onClick={() => setState({ isModalVisible: true })}>
    Open Modal
  </Button>
  {state.isModalVisible && (
    <Modal onClose={onModalClose}>
      <Header>Focus Jail Container</Header>
      <Body>
        <Field>
          <Label>Input 1</Label>
          <Input
            placeholder="Focus will be locked in this modal"
            ref={ref => {
              setTimeout(() => {
                ref && ref.focus();
              }, 0);
            }}
          />
        </Field>
        <Field>
          <Label>Input 2</Label>
          <Input placeholder="Focus will be locked in this modal" />
        </Field>
      </Body>
      <Footer>
        <FooterItem>
          <Button onClick={onModalClose} basic>
            Cancel
          </Button>
        </FooterItem>
        <FooterItem>
          <Button isPrimary onClick={onModalClose}>
            Confirm
          </Button>
        </FooterItem>
      </Footer>
      <Close aria-label="Close modal" />
    </Modal>
  )}
</>;
```

### Widths

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

const WidthsExample = () => {
  const triggerRef = React.useRef();
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [width, setWidth] = React.useState('500px');
  const onModalOpen = (triggerElement, width) => {
    setWidth(width);
    setIsModalVisible(true);
    triggerRef.current = triggerElement;
  };
  const onModalClose = () => {
    setIsModalVisible(false);
    triggerRef.current.focus();
  };

  return (
    <>
      <Grid>
        <Row>
          <Col md>
            <Button onClick={e => onModalOpen(e.target, '50%')}>Show 50% modal</Button>
          </Col>
          <Col md>
            <Button onClick={e => onModalOpen(e.target, '480px')}>Show 480px modal</Button>
          </Col>
          <Col md>
            <Button onClick={e => onModalOpen(e.target, '900px')}>Show 900px modal</Button>
          </Col>
        </Row>
      </Grid>
      {isModalVisible && (
        <Modal
          onClose={onModalClose}
          style={{ width: width, paddingBottom: DEFAULT_THEME.space.md }}
        >
          <Header>{width} Header</Header>
          <Body>
            Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth
            pea water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery
            potato desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel
            kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn
            pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot
            kale watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell
            pepper artichoke. Nori grape silver kombu.
          </Body>
          <Close aria-label="Close modal" />
        </Modal>
      )}
    </>
  );
};

<WidthsExample />;
```
