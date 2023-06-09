#PURPOSE: Creates Principal Components

#gets data
source("Time Analytics/importFUNCTION.R")
time<- importAndCleanData()

#converts to principal components
pc <- prcomp(time)

#displays principal components
show(pc)
summary(pc)
biplot(pc)
