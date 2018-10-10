describe("Player", function() {
  var list = ['Grease', 'Brazil', 'The Fifth Element', 'The Last of the Mohicans', 'Star Wars'];
  let fixture = document.querySelector('#fixture')
  
  let addFixture = function(){
    fixture.innerHTML = '<ul></ul><input type="text" id="filmName"><button id="addFilm">Add Film</button>';
  }
  
  let clearFixture = function(){
    fixture.innerHTML = '';
  }
  
  beforeEach(function() {
    addFixture();
    make_list(list, 'ul');
  });
  
  afterEach(clearFixture);

  // "describe" allows you to group sets of tests together
  describe("Step One", function() {

    // "it" is where the actual test is defined
    it("should create the list in the ul element", function() {
      expect(fixture.querySelectorAll('ul li').length).toBe(5);
    });
    
    it("should include all of the items in the list", function() {
      for(item in list){
        expect(fixture.querySelector('ul').innerHTML).toMatch(list[item]);
      }
    });
  });

  describe("Step Two", function() {
    it("should sort the list alphabetically", function() {
    });
  });

  describe("Step Three", function() {
    it("should allow new items to be added to the list", function() {
    });
  });

  describe("Step Four", function() {
    it("should not allow empty items to be added", function() {
    });
  });

  describe("Step Five", function() {
    it("should keep the list sorted when new items are added", function() {
    });
  });

  describe("Step Six", function() {
    it("should be possible to remove items from the list", function() {
    });
  });
});
