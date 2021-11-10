const ListItem = ({ data, city, name }) => {
  return (
    <>
      <p>
        Result: {data} {city} {name}
      </p>
      <div>
        <div class="card">
          <a href="./ListItem">
            <div class="card-image">
              <img src="./assets/images/allensolly.png" alt=""></img>
            </div>
            <div class="card-text-primary">Allen Solly, Levi's, UCB...</div>
            <div class="card-price">From ₹349</div>
            <div class="card-comments">Shirts, Pants Blazers...</div>
          </a>
        </div>

        <div class="card">
          <a href="./ListItem">
            <div class="card-image">
              <img src="./assets/images/sarees.jpeg" alt=""></img>
            </div>
            <div class="card-text-primary">Sarees & Dress Materials</div>
            <div class="card-price">From ₹249</div>
            <div class="card-comments">Lowest Price Ever !</div>
          </a>
        </div>
      </div>
    </>
  );
};

export default ListItem;
