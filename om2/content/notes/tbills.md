+++
title = "tbills"
date = 2024-01-14
+++

### :us: background
- zero coupon: buy at discount and receive face value at maturity;
see nothing until maturity date
- TBills (<1yr maturity) are distinct from TBonds (20yr+) and TNotes (in between)
- [from investopedia](https://www.investopedia.com/ask/answers/033115/what-are-differences-between-treasury-bond-and-treasury-note-and-treasury-bill-tbill.asp):
TBills taxed only at the fed level,
and the interest is treated as income


### fidelity interface
- can buy new issue treasuries sans fees
- can setup "autoroll" to reinvest short-term TBills into similar new (new-issue?) vehicles when things mature
    - example: `912797GE1` from Aug 2023 will auto-roll in Feb 2024;
    its auction results at the time were 5.24% median rate;
    it auto-rolled to ... (TODO)


### examples
- can lookup the CUSIP ID, e.g. `912797FH5`,
  - this one matures 05/16/2024
  - acquiring $25k face value in May 2023 would cost ~$23,825,
  a $1,175 discount from the face value, or 4.7%
  - hm but quoted bid yields are 5.29% so I think I'm not understanding something
- `912797JH1`
  - matures 03/12/2024
  - acquiring $75k face value in mid Jan 2024 would cost ~$74,384,
  a $616 discount from face value (0.82%);
  this two month rate tracks to the expected annual rate of ~5%


### vs money market
- Fidelity holds this in `SPAXX`
- this will be mostly taxed as ordinary income
- latest 7 day yield is 4.98%, compounded daily,
and this is net of the expense ratio


### why not TNotes?
- for one, they are just issued less often by their nature, and so are a bit less accessible
- but there is an upcoming issue on Jan 18th, maybe I'll check that out;
update: yeah three notes now available:
around 4% expected yield for each,
maturity in '26, '29 and '31,
semi-annual coupon.
Reminder: they're subject to federal income tax but no state/local taxes.
