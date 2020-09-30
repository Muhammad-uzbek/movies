const init = () => {
  // Sentry.init({
  //   dsn:
  //     "https://32c62a26068c42bb9763af3957a467cd@o454254.ingest.sentry.io/5443927",
  //   integrations: [new Integrations.BrowserTracing()],
  //   tracesSampleRate: 1.0,
  // });
};
const log = (error) => {
  // Sentry.captureException(error);
  console.log(error);
};
export default {
  log,
  init,
};
