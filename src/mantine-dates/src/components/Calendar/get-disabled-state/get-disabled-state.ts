import dayjs from 'dayjs';

interface GetDisabledState {
  /** Current selected month */
  month: Date;

  /** Min and max possible dates */
  minDate: Date;
  maxDate: Date;

  /** Is calendar showing two months? */
  hasMultipleMonths?: boolean;
}

export function getDisabledState({ maxDate, minDate, month, hasMultipleMonths }: GetDisabledState) {
  const nextDisabled =
    maxDate instanceof Date &&
    dayjs(month)
      .add(hasMultipleMonths ? 1 : 0, 'month')
      .endOf('month')
      .isAfter(dayjs(maxDate).endOf('day').subtract(1, 'minute'));
  const previousDisabled =
    minDate instanceof Date &&
    dayjs(month).startOf('month').isBefore(dayjs(minDate).startOf('day').add(1, 'minute'));

  return { nextDisabled, previousDisabled };
}
