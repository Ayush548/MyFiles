 #outputs data
 #centralized location to make easy
 importAndCleanData <- function(){
    source("Time Analytics/CleanUpFUNCTION.R")

    #gets data
    data <- read.csv("~/Desktop/Time.csv", row.names = 1)
    data <- CleanUp(data)
    data
 }