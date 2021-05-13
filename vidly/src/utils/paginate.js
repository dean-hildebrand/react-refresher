import _ from "lodash";

//below makes items array into lodash object to chain methods on array
//.value changes lodash obj back into regular array

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}
