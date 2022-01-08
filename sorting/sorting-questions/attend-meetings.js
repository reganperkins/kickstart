/*
Attend Meetings

Given a list of meeting intervals where each interval consists of a start and
an end time, check if a person can attend all the given meetings such that only
one meeting can be attended at a time.

Example One
  Input = [[1, 5], [5, 8], [10, 15]]
  Output = 1
  As the above intervals are non-overlapping intervals, it means a person can attend all
  these meetings.

Example Two
  Input = [[1, 5], [4, 8]]
  Output = 0
  Time 4 - 5 is overlapping in the first and second intervals.
*/


/*
Complete the function below.
The function takes a 2D INTEGER ARRAY as input and is expected to return an INTEGER.
*/
function canAttendAllMeetings(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const previous = intervals[i - 1];

    if (previous[1] > current[0]) {
      return 0;
    }
  }

  return 1;
}
