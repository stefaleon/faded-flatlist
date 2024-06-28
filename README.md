https://jainsameer.medium.com/react-native-faded-flatlist-over-background-image-9651f38ad31c

 # React Native faded FlatList over Background Image

## How to create a faded list of messages like Instagram?

In this image, you will notice a flat list that is transparent and have a fade effect on the top and bottom. In this article, we will try to achieve the same effect in React Native. For this, we will need 4 components:

1. FlatList
2. Gradient view which has transparent edges on the top and bottom
3. Masked View which will use gradient view to mask the flat list
4. A Background Image of your choice

FlatList and BackgroundImage component is already part of the React Native library. We will need a couple of third-party modules for gradient view and masked view.

Let us start by creating a fresh new react native project and setting up the above components.

# Install Dependencies

After the project is created and we need to install the following dependencies:

1. @react-native-community/masked-view — This module provides a way to mask any component with a given element.
2. react-native-linear-gradient — This module will be used to create a view that has transparent edges on the top and bottom

You can install them in a single command like

npm i — save @react-native-community/masked-view react-native-linear-gradient

Let’s start setting up our flat list, masked element, and then put everything together.

# Create FlatList

Create a FlatList with some random data. I generated sentences from [https://randomwordgenerator.com/sentence.php.](https://randomwordgenerator.com/sentence.php.) They are pretty good at this when you need some fake sentences.

# Create a gradient view

For creating a gradient view we will be using the LinearGradient module. The view will be used by the MaskedView module to put a mask on its children. We will need to provide a gradient that has transparency on the top and bottom but is solid in the middle. Here is how I did it:

You will notice that I have used a color array for linear-gradient like \[‘#FFFFFF00’, ‘#FFFFFF’, ‘#FFFFFF00’\] where the first and last elements are [RGBA](https://en.wikipedia.org/wiki/RGBA_color_model) and the middle one is RGB. RGBA will be fully opaque and RGB will be solid. This will create a View with transparency at the top and bottom and a solid white color in middle. It doesn't matter if you use different colors but the top and bottom must be fully opaque so use RGBA.

# Create a Masked View

Now we have set up both components we will look into creating a masked view. A masked view is a component that accepts a masked element and children. The masked element is the view used to define masking over the children. We can set this up in a way so we can have a reusable component that can be used for different purposes.

Above is a simple functional component that accepts 2 props, _element and children,_ and then feeds the same to MaskedView.

So far we have created 3 components, a flat list, a gradient view, and a masked view. They have their own purpose. A flat list to display messages, the gradient view will be used for masking and the masked view will use both of them to create a faded effect. Now let's put everything together to get the desired effect

# Final Component

Now we have our masked view setup, let's put everything together under a background image.

This will give the desired result. Here is how it looks on my phone.

![](https://miro.medium.com/v2/resize:fit:800/1*iGQICmwcb0GcNq6SaHrTYQ.png)

# Conclusion

We can use the gradient view as a mask element for MaskedView to create a faded effect.

You can play with it or if you have any questions please let me know.