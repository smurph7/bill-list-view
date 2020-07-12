export const maxNumberOfBillsToRender = 10;
export const statusConstants = {
  processing: 'processing',
  scheduled: 'scheduled',
  unableToPay: 'unable to pay',
  paid: 'paid',
};
export const statusTooltips = {
  processing:
    'This bill is currently in processing, it can take approx. 1-2 hours depending on the time of day.',
  scheduled:
    "This bill is scheduled to be paid and will be paid on the due date, you're in good hands!",
  unableToPay:
    'We are unable to pay your bill if the required payment options have not been provided. Please make sure payment options are visible on your bill.',
  paid: 'This bill has been paid!',
};
