## What Does It Look like?

- As a user I would like to have a single location that I can view which streaming app is playing a selected movie or show
- As a user I’d like to be able to filter my viewing category 
- As a User I would like the ability to create a watch list of movies 
- As a User I would like the ability to rate the shows that I have seen
- As a User I would like the ability to search for any specific title 

## Feature Tasks:

- User can view what streaming platform the movie or show is on 
- User can create a watchlist of movies they want to view
- Ability to rate movies that they have viewed
- User can search for a specific movie title 

## Acceptance Tests:

- Ensure there is infinite scrolling of content
- Ensure the user is able to create, update, and modify a watchlist
- Ensure users’ movies will be able to receive a rating 

## Scope (In/Out)

- IN - What will your product do?
    - Display the best source to watch the movie 
    - Create, update, and modify a watchlist
    - Movies will be able to receive a rating from the user
    - User will able to search for a specific movie title
    - Ability to filter based on genre
- OUT - What will your product not do?
    - Render or play the movie
    - Will not come with popcorn or beer

## Minimum Viable Product

- What will your MVP functionality be?
    - Display of the movies and their respective streaming services
    - Ability to create, update and modify a watch list 
    - Ability to search for a specific title of a movie and render its streaming locations 
    - Ability to rate movies after their viewing 
    - Ability to filter based on genre

## Stretch

- What are your stretch goals?
    - Shows
        - Add the same capabilities for shows on streaming services 
    - Pricing
        - Some of the streaming services require a fee to view the requested movie/show 
    - Recommendations
        - A list of recommended shows based off of previous selections

- What stretch goals are you going to aim for?
    - Shows
    - Recommendations

## Functional Requirements

- List the functionality of your product. This will consist of tasks such as the following:
    - Allow users to search for a specific movie title 
    - Allow users to interact with a card style app to cycle through movies
    - Display a watchlist 
    - Rate specific movies of the user’s choice

## Data Flow

- When the user executes the application, they are taken to a home screen that will display individual  movie cards on their respective streaming services. The user will have the ability to add these movies to a watch list for later viewing or select the card to see where they can view. Once the user has viewed the movie, they will be able to rate the movie as they see fit. When they are satisfied, they can exit the application. 

## Non-Functional Requirements (301 & 401 only)

- Security
    - Security-wise, we will require a username and password to log into our application. We are considering using oAuth to verify user credentials. 
- Usability 
    - Scrolling through the cards will be simple with the help of on-screen clickable arrows. 
    - Filtering will be handled using an onscreen dropdown as well for genre selections 
    - Watchlist will also remain on screen as well as having an independent page for expanded views. 
