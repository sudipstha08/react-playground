## Lazy Load
- Livewire allows you to lazy load components that would otherwise slow down the initial page load.
- Without lazy loading, this component would delay the loading of the entire page and make your entire application feel slow.
- Now, instead of loading the component right away, Livewire will skip this component, loading the page without it. Then, when the component is visible in the viewport, Livewire will make a network request to fully load this component on the page.
- Unlike other network requests in Livewire, lazy loading updates are isolated from each other when sent to the server. This keeps lazy loading fast, by loading each component in parallel when a page loads
- - https://livewire.laravel.com/docs/lazy
- "Lazy loading is a technique used by web pages to optimize load time. With lazy loading, a web page loads only required content at first, and waits to load any remaining page content until the user needs it. Lazy loading reduces the time it takes for a web page to open because the browser only loads a fraction of the content on the page at a time
- "Eager loading is the opposite of lazy loading. With eager loading, a web page loads all of its content immediately. Eager loading lets the browser store all contents of the web page in its cache, which can be helpful if visitors return to the page. However, this method can be slow to load larger web page files.Pages with less data on them tend to employ eager loading. Take your average Wikipedia page: These articles are dominated by text, which takes up much less file space than images. Therefore, Wikipedia chooses eager loading over lazy loading for its page content." https://blog.hubspot.com/website/lazy-loading-eager-loading- 
- "Pages with less data on them tend to employ eager loading. Take your average Wikipedia page: These articles are dominated by text, which takes up much less file space than images. Therefore, Wikipedia chooses eager loading over lazy loading for its page content." https://blog.hubspot.com/website/lazy-loading-eager-loading
```
// lazy-loads an image
<img src="image.png" loading="lazy" alt="..."/>

// eager-loads an image
<img src="image.png" loading="eager" alt="..."/>

// defers to the loading behavior of the browser (the same has having no “load” attribute)
<img src="image.png" loading="eager" alt="..."/>

```

- https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading
- Deferring loading of non-critical or non-visible content, also commonly known as "lazy-loading", is a common performance and UX best practice. 
- improve the initial loading performance of an application by decreasing the amount of JavaScript needed to render a route.
- It allows you to defer loading of Client Components and imported libraries, and only include them in the client bundle when they're needed. For example, you might want to defer loading a modal until a user clicks to open it.
- Lazy loading is a strategy to identify resources as non-blocking (non-critical) and load these only when needed. It's a way to shorten the length of the critical rendering path, which translates into reduced page load times.
- Lazy loading can occur on different moments in the application, but it typically happens on some user interactions such as scrolling and navigation.
https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path
https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading
image in action - https://web.dev/articles/browser-level-image-lazy-loading

Consider lazy loading when
- Components are not immediately visible or frequently used:

This is the most common use case for lazy loading. If a component is hidden from view on initial page load or only accessed occasionally, it makes sense to delay its loading until it’s actually needed. This reduces the initial bundle size and improves perceived performance for users, especially on slower connections.

- Large or complex components:

Loading large components upfront can significantly impact initial page load times. By lazy loading such components, you minimize the initial footprint and ensure a smoother initial experience. This is especially relevant for components with extensive dependencies or heavy processing requirements.

- Features based on user interactions:

If a component is displayed only after a specific user action, like clicking a button or navigating to a dedicated route, consider lazy loading it. This avoids unnecessarily loading unnecessary code for features the user might not even interact with.

## When Avoid
- Avoid lazy loading components that are essential for the core functionality of your application. 
- If a component is accessed frequently throughout the user journey, lazy loading might not provide significant benefits. The loading overhead might outweigh the initial bundle size reduction.
- Simple or small components:

The complexity of implementing lazy loading might outweigh the benefits for very small or simple components. Consider the trade-off between code footprint and development effort in such cases.


No, for every component it no needed. It make sense to use for each layout or page. A good place to start is with routes. Most people on the web are used to page transitions taking some amount of time to load. You also tend to be re-rendering the entire page at once so your users are unlikely to be interacting with other elements on the page at the same time.

For example, you creating application for news aggregator. Your application include two pages such as NewsList and NewsItemPage. Every pages includes several different components. In this example make sense to use lazy loading component for each other page. And then it will load the components it needs.

The application also has a Header and Footer. They should be loaded in the usual way. Since they are used on every page, and there is no point in asynchronous loading.
Yes, route-based lazy loading is a common practice. You can use libraries like react-router to achieve this. Here's an example:
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

const NewsList = lazy(() => import('./pages/NewsList'));
const NewsItemPage = lazy(() => import('./pages/NewsItemPage'));

const App = () => (
  <Router>
    <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={NewsList}/>
          <Route path="/news/:id" component={NewsItemPage}/>
        </Switch>
      </Suspense>
    <Footer />
  </Router>
);

 - Lazy loading or loading content on demand is the process of identifying resources that are non-blocking to a website and delaying their loading or initialization until the page needs them.
- You’ve done everything right: content delivery network (CDN) setup, file compression enablement, static JS and CSS file minification, and resource caching. You’ve been sure to follow good coding standards and promote the reusability of components. Now, you’re monitoring your website’s performance and hoping for the best.


TODOS:
- Bundle size downloaded before and after lazy in network
  
What are the advantages of lazy loading?
Faster page load: All else being equal, webpages with smaller file sizes load faster. With lazy loading, a webpage starts off smaller than its full size and thus loads faster. Speedy web performance has numerous benefits, including better SEO, higher conversion rates, and an improved user experience.

No unnecessary content: Suppose a page loads multiple below-the-fold images but the user exits the page before scrolling down. In such a case, the bandwidth used to deliver the images and the browser's time spent requesting and rendering the images were essentially wasted. In contrast, lazy loading ensures that these images only load when necessary. This saves time and processing power, and it may save money for the website owner because less bandwidth is used.
 scenarios where lazy loading is beneficial
Loading JS bundles that aren't used on the currently viewed page but are used on other pages of the website

Loading JS components and any library backing them up immediately instead of when that component is viewable on the page

Using a third-party JS library which is only required on a specific page. Such libraries can be for ready-made features, JS utility libraries, animations, analytics, or monitoring purposes.

Loading CSS-style files for the entire website rather than loading only the style files needed for the viewable page

Loading a collection of images that aren't visible to the user until the user scrolls to a particular part of the page

One form of lazy loading is infinity scroll, in which, the content of the web page is loaded as and when the user scrolls down the page. It is a popular technique being used by various websites.

Loading of a resource when a specific DOM event has been triggered, such as resize or click

At a specific state within your website, such as after submitting a form and showing a submission success component that might be animation-heavy

Keep the granularity of your code splitting at a reasonable level to avoid excessive network requests.

Faster website load times
Reduced bandwidth usage
Improved user experience
Better SEO performance
n-demand loading reduces time consumption and memory usage thereby optimizing content delivery. As only a fraction of the web page, which is required, is loaded first thus, the time taken is less and the loading of rest of the section is delayed which saves storage. All of this enhances the user’s experience as the requested content is fed in no time.
Unnecessary code execution is avoided.
Optimal usage of time and space resources makes it a cost-effective approach from the point of view of business persons. (website owners)


## What are the disadvantages of lazy loading?
Users may request resources faster than expected: For instance, if a user scrolls quickly down a page, they might have to wait for the images to load. This could negatively impact user experience.

Additional communication with server: Instead of requesting all the page content at once, the browser might have to send multiple requests to the website's servers for content as the user interacts with the page. The use of a content delivery network (CDN) minimizes this potential drawback, because the images are cached by the CDN and the browser does not have to send a request all the way to the origin server to fetch them.

Additional code for the browser to process: If a developer adds several lines of JavaScript to a webpage to tell the browser how to lazy load page resources, this adds to the amount of code that the browser has to load and process. If done inefficiently, this slight additional loading and processing time might outweigh the time saved by lazy loading.

One important thing to remember is that while lazy loading improves performance, it might introduce a slight delay when a component is first loaded. This delay is the trade-off for not loading everything upfront.

Firstly, the extra lines of code, to be added to the existing ones, to implement lazy load makes the code a bit complicated.
Secondly, lazy loading may affect the website’s ranking on search engines sometimes, due to improper indexing of the unloaded content.


## References
- https://web.dev/explore/fast#lazy-load-images-and-video
- https://web.dev/articles/iframe-lazy-loading
- https://react.dev/reference/react/lazy