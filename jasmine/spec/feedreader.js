/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This test tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test tests to make sure that the
         * url property of a feed is defined and it is not
         * empty.
         */
        it('has a URL defined and that the URL is not empty', function() {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            }
        });

        /* This test tests to make sure that the
         * name property of a feed is defined and it is not
         * empty.
         */
        it('has a name defined and that the name is not empty', function() {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            }
        });
    });

    /* This suite is all about the menu.
    * It tests the functionality of the menu (hidden by default and opening and closing when clicked)
    */
    describe('The menu', function() {

        /* This test tests to make sure that the
         * menu is hidden by default when opening the page.
         */
        it('is hidden by default', function() {
            const body = document.getElementsByClassName('menu-hidden');
            expect(body.length).not.toBe(0);
        });

        /* This test tests to make sure that the
         * menu opens when the menu icon is clicked and closes
         * when the menu icon is clicked again.
         */
        it('changes visibility when the menu icon is clicked', function() {
            //
        });

    });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());