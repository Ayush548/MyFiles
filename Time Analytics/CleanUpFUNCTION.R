# Function to sum two columns and remove the original columns
combiner <- function(data, colnew, col1, col2){
  data[colnew] <- data[col1] + data[col2]
  data <- data[, !(colnames(data) %in% c(col1, col2))]
  
    data
}

# Function to Clean up data
CleanUp <- function(data) {

  #combine data
  data <- combiner(data, "Internships", "Internships..other.", "Palav")
  data <- combiner(data, "friends", "RW", "hanging.out.with.friends")
  data <- combiner(data, "OnlineSocial", "FaceTime", "Texting")
  data <- combiner(data, "Family", "Family.Time..walking.etc.", "Golf.Dad.Sports")
  data <- combiner(data, "projects", "Technical.Projects", "Other.Projects")

  #Make sum 1440 for uniformness across days
  for(i in 1:(nrow(data))) {   
    sum <- rowSums(data[i,])
    data[i,] <- data[i,]/sum
    data[i,] <- data[i,] * 1440
  }
   data
}


