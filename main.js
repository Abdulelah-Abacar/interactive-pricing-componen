const rangeInput = document.querySelector('input[type="range"]')
let pageViews = document.querySelector(".pageviews")
let priceAmount = document.querySelector(".price_amount h2")
let toggal = document.querySelector("input[type='checkbox']")
const views = ['10K', '50K', '100K', '500K', '1M'];
const priceMonthly = [8, 12, 16, 25, 36];
const priceYearly = [];

priceMonthly.forEach((price) => {
  priceYearly.push(price - (price * 25) / 100);
});
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
function handleInputChange(e) {
  let target = e.target;
  const min = target.min;
  const max = target.max;
  const val = target.value;
  pageViews.innerText = `${views[target.valueAsNumber]} pageviews`;
  renderPrice();
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}
rangeInput.addEventListener('input', handleInputChange)

const renderPrice = () => {
  if (toggal.checked) {
      const currentPrice = priceYearly[rangeInput.valueAsNumber];
      priceAmount.innerText = `${formatter.format(currentPrice)}`;
  }
  else {
      const currentPrice = priceMonthly[rangeInput.valueAsNumber];
      priceAmount.innerText = `${formatter.format(currentPrice)}`;
  }
};
toggal.addEventListener('change', () => {
  renderPrice();
});

if (window.innerWidth <= 767) {
  document.querySelector('.discount').innerText = '25%';
} else {
  document.querySelector('.discount').innerText = '25% discount';
}
window.onresize = () => {
  window.location.reload();
}