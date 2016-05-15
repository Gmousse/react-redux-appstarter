import { configure } from '@kadira/storybook';

function loadStories() {
    require('./stories/YourComponent-story');
}

configure(loadStories, module);
