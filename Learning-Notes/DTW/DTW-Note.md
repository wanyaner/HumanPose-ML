## Time Series

A time series is a sequence of measurements of a quantity (e.g. temperature, pressure) over time.

Distance/Similarity measure `d(x,y)` between the time series x and y:

- Euclidean distance
- Dynamic Time Warping
- Longest Common Subsequence model
- Threshold based distance measures

## Dynamic Time Warping

First proposed by Berndt and Clifford (1994).  

Start by constructing n × m matrix **D**, where `Di,j  = d(xi,yj)` and `d(xi,yi) = |xi −yi|`.  

#### Warping Path







- Lower bounds 
- FAST DTW