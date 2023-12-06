const cities = [
  { name: 'Montgomery, AL', lat: 32.3615, long: -86.2791 },
  { name: 'Juneau, AK', lat: 58.3019, long: -134.4197 },
  { name: 'Phoenix, AZ', lat: 33.4484, long: -112.074 },
  { name: 'Little Rock, AR', lat: 34.7361, long: -92.3311 },
  { name: 'Sacramento, CA', lat: 38.5556, long: -121.4689 },
  { name: 'Denver, CO', lat: 39.7392, long: -104.9903 },
  { name: 'Hartford, CT', lat: 41.767, long: -72.677 },
  { name: 'Dover, DE', lat: 39.1619, long: -75.5267 },
  { name: 'Tallahassee, FL', lat: 30.4383, long: -84.2807 },
  { name: 'Atlanta, GA', lat: 33.749, long: -84.388 },
  { name: 'Honolulu, HI', lat: 21.307, long: -157.8584 },
  { name: 'Boise, ID', lat: 43.615, long: -116.2023 },
  { name: 'Springfield, IL', lat: 39.7817, long: -89.6501 },
  { name: 'Indianapolis, IN', lat: 39.7686, long: -86.1625 },
  { name: 'Des Moines, IA', lat: 41.591, long: -93.6037 },
  { name: 'Topeka, KS', lat: 39.049, long: -95.6777 },
  { name: 'Frankfort, KY', lat: 38.1867, long: -84.8754 },
  { name: 'Baton Rouge, LA', lat: 30.4583, long: -91.1403 },
  { name: 'Augusta, ME', lat: 44.3071, long: -69.781 },
  { name: 'Annapolis, MD', lat: 38.9786, long: -76.4922 },
  { name: 'Boston, MA', lat: 42.3601, long: -71.0589 },
  { name: 'Lansing, MI', lat: 42.7325, long: -84.5555 },
  { name: 'St. Paul, MN', lat: 44.9375, long: -93.103 },
  { name: 'Jackson, MS', lat: 32.2988, long: -90.1848 },
  { name: 'Jefferson City, MO', lat: 38.5767, long: -92.1735 },
  { name: 'Helena, MT', lat: 46.5958, long: -112.027 },
  { name: 'Lincoln, NE', lat: 40.8136, long: -96.7026 },
  { name: 'Carson City, NV', lat: 39.1608, long: -119.7539 },
  { name: 'Concord, NH', lat: 43.2067, long: -71.5388 },
  { name: 'Trenton, NJ', lat: 40.2206, long: -74.7597 },
  { name: 'Santa Fe, NM', lat: 35.6672, long: -105.9644 },
  { name: 'Albany, NY', lat: 42.6526, long: -73.7562 },
  { name: 'Raleigh, NC', lat: 35.7804, long: -78.6391 },
  { name: 'Bismarck, ND', lat: 46.8133, long: -100.779 },
  { name: 'Columbus, OH', lat: 39.9625, long: -83.0007 },
  { name: 'Oklahoma City, OK', lat: 35.4822, long: -97.535 },
  { name: 'Salem, OR', lat: 44.9308, long: -123.0292 },
  { name: 'Harrisburg, PA', lat: 40.2698, long: -76.8756 },
  { name: 'Providence, RI', lat: 41.8231, long: -71.4188 },
  { name: 'Columbia, SC', lat: 34.0007, long: -81.0348 },
  { name: 'Pierre, SD', lat: 44.3683, long: -100.351 },
  { name: 'Nashville, TN', lat: 36.1658, long: -86.7844 },
  { name: 'Austin, TX', lat: 30.25, long: -97.75 },
  { name: 'Salt Lake City, UT', lat: 40.7547, long: -111.8926 },
  { name: 'Montpelier, VT', lat: 44.2664, long: -72.5719 },
  { name: 'Richmond, VA', lat: 37.5407, long: -77.436 },
  { name: 'Olympia, WA', lat: 47.0425, long: -122.8931 },
  { name: 'Charleston, WV', lat: 38.3363, long: -81.6123 },
  { name: 'Madison, WI', lat: 43.0746, long: -89.384 },
  { name: 'Cheyenne, WY', lat: 41.1399, long: -104.8202 },
];
//dropdown

const cityDropdown = document.getElementById('cityDropdown');

function loadDropdown() {
  for (const city of cities) {
    let opt = document.createElement('option');
    opt.value = city.name;
    opt.innerText = city.name;
    cityDropdown.appendChild(opt);
  }
}

window.onload = loadDropdown;

//dropdown