
**See [tamagui.dev](https://tamagui.dev) for documentation.**

Tamagui lets you share more code between web and native apps without sacrificing the two things that typically suffer when you do: performance and code quality.

It does this with an optimizing compiler that outputs platform-specific optimizations - it turns styled components, even with complex logic or cross-module imports, into a simple `div` alongiside atomic CSS on the web, or a View with its style objects hoisted on native.

The entirety of Tamagui works at compile time and runtime, and can be set up gradually, with initial usage as simple as importing it and using the base views and styled function.

We recommend checking out the starters with `npm create tamagui@latest`, they range from a simple learning example to a production-ready monorepo.

The compiler optimizes most and ultimately flattens a majority of styled components. In the [~500px² responsive browser section](https://tamagui.dev) of the Tamagui website, 49 of the 55 or so [inline styled components](https://github.com/tamagui/tamagui/blob/master/apps/site/components/HeroResponsive.tsx) are flattened to a `div`. The homepage gains nearly 15% on Lighthouse with the compiler on.

[Learn more on the website](https://tamagui.dev/docs/intro/introduction).

## Installing Tamagui

To install Tamagui with all its components run:

```bash
npm install tamagui @tamagui/config
```

Next, create a Tamagui config file named `tamagui.config.ts`:

```ts
import { config } from '@tamagui/config/v2'

import { createTamagui } from 'tamagui'
const tamaguiConfig = createTamagui(config)
// this makes typescript properly type everything based on the config

type Conf = typeof tamaguiConfig

declare module 'tamagui' {

  interface TamaguiCustomConfig extends Conf {}

}
export default tamaguiConfig
// depending on if you chose tamagui, @tamagui/core, or @tamagui/web
// be sure the import and declare module lines both use that same name
```

**Note:** The `v2` config imports the css driver on web and react-native on native. For react-native, import the `@tamagui/config/v2-native` config, and for reanimated, import the `@tamagui/config/v2-reanimated` config.

### Usage

To use Tamagui in your Expo or Next.js projects, all you need to do is wrap your application in the `TamaguiProvider`:

```tsx
// this provides some helpful reset styles to ensure a more consistent look
// only import this from your web app, not native
import '@tamagui/core/reset.css'

import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from './tamagui.config'

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      {/* your app here */}
    </TamaguiProvider>
  )
}
```

Done! Now try out some components:

```tsx
import { Button, Text } from 'tamagui'

function Example() {
  return (
    <Button>
      <Text>My button</Text>
    </Button>
  );
}
```

## Contributing

To contribute to Tamagui reference the [contributing guide](https://github.com/tamagui/tamagui/blob/master/CONTRIBUTING.md).
To contribute to documentation reference the [writing guide](https://github.com/tamagui/tamagui/apps/site/WRITING-GUIDE.md).