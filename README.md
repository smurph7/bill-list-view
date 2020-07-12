# Bills List View

## User Story
As a user, I want to see the list of my bills in one place. This includes:
* a thumbnail of the bill image I uploaded so I know what bill it is. If I click on this thumbnail I want to see the full image so that I can check it out properly.
* the amount of my bill
* the date of my bill
* the status of my bill (processing, scheduled, unable to pay, paid)
* an additional information pop-up next to fields I may not immediately understand (e.g. status) to give me some more information about this field (e.g. Processing: This bill is currently in processing, it can take approx. 1-2 hours depending on the time of day. Scheduled: This bill is scheduled to be paid and will be paid on the due date, you're in good hands!, etc.)
* load only 10 (or some pre-defined number) bills at the time
* an infinite scroll to load next batch of bills if there are any

## Notes
This application uses mock data from https://github.com/smurph7/mock-data, which uses JSONPlaceholder. The data can be accessed from https://my-json-server.typicode.com/smurph7/mock-data.

## Run the app

You can access a workable version of this app at https://snack.expo.io/@smurph7/bill-list-view to run on your device or an android or ios simulator in the browser.

## Set up
To set up, install dependencies:
```
yarn
```

Install ios dependencies:
```
cd ios
pod install
```

## Test
To run tests, run one of the following commands:
```
yarn jest
yarn jest --verbose
```