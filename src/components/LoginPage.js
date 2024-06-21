const HomePage = () => {
  return (
    <>
      <div class="form-outline" data-mdb-input-init>
        <input type="email" id="typeEmail" class="form-control" />
        <label class="form-label" for="typeEmail">
          Email input
        </label>
      </div>
      <div class="form-outline" data-mdb-input-init>
        <input type="password" id="typePassword" class="form-control" />
        <label class="form-label" for="typePassword">
          Password input
        </label>
      </div>
    </>
  );
};

export default HomePage;
