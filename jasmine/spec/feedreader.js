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

        /* Variable needed in multiple tests in this suite
         */
        const bodyClassList = document.querySelector('body').classList;

        /* This test tests to make sure that the
         * menu is hidden by default when opening the page.
         */
        it('is hidden by default', function() {
            // const bodyClassList = document.querySelector('body').classList;
            expect(bodyClassList).toContain('menu-hidden');
         });

         /* This test tests to make sure that the
         * menu opens when the menu icon is clicked and closes
         * when the menu icon is clicked again.
         */
         it('changes visibility when the menu icon is clicked', function() {
             const menuButton = document.querySelector('.menu-icon-link');
             menuButton.click();
             expect(bodyClassList).not.toContain('menu-hidden');
             menuButton.click();
             expect(bodyClassList).toContain('menu-hidden');
         });

    });

    /* This suite is about the functionality of new feed selection.
    * Tests to make sure the content changed when a new feed is loaded.
    */
    describe('New feed selection', function() {

        /* Call loadFeed within forEach before the test can be executed.
        * Pass loadFeed done() as it's callback to make sure it is called when loadFeed()
        * has finished.
        */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        /* Tests to make sure there is at least a single entry element in the feed container when
        * the asynchronous loadFead function has finished. Done is passed to the test to signal
        * the test can be executed when done() has been called after loadFeed() has finished.
        */
        it('.feed container should have at least 1 entry', function(done) {
            const totalEntriesLength = document.querySelectorAll('.feed .entry').length;
            expect(totalEntriesLength).toBeGreaterThan(0);
            done();
        });
    });

    /* This suite is about the functionality of initial entries.
    * Tests to make sure there is at least a single entry element in the feed container when
    * the asynchronous loadFead function has finished.
    */
    describe('Initial entries', function() {

        /* Call loadFeed within forEach before the test can be executed.
        * Pass loadFeed the first item in the allFeeds array to obtain the oldFeed.
        * Then call loadFeed again in the callback with a different item from the allFeeds array.
        * THen call done in it's callback.
        */
        let oldFeedFirstTitle;
        beforeEach(function (done) {
            loadFeed(0, function () {
                oldFeedFirstTitle = document.querySelectorAll('.feed article h2')[0];
                loadFeed(2, function () {
                    done();
                });
            });
        });

        /* Tests to make sure that when a new feed is loaded
        * by the loadFeed function the content actually changes, but only after the feed has laoded
        * (done is called).
        */
        it('should change content after loadFeed has finished', function(done) {
            const newFeedFirstTitle = document.querySelectorAll('.feed article h2')[0];
            expect(oldFeedFirstTitle).not.toEqual(newFeedFirstTitle);
            done();
        });
    });
}());
