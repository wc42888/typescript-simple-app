import React, {useContext, Context, FC, Component} from 'react';

export const makeContextConsumerHook = <T extends unknown>(ctx: Context<T>) => {
  const context = useContext(ctx);

  if (context === undefined) {
    throw new Error('Consumer must be used within a Provider');
  }

  return context;
};

export const createContextProviderHOC =
  (Provider: FC) => (WrappedComponent: FC) =>
    class extends Component {
      render() {
        return (
          <Provider>
            <WrappedComponent {...this.props} />
          </Provider>
        );
      }
    };
