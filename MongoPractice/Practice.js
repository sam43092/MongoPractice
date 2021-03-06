//Samantha Long


//1.Create a view showing the values of the product on hand.

db.createView("ProductOnHand", "product",
    { $project:{ "name:", $multiply: ["price", "qty" ]} }
    );

//Having syntax issues with this question.

//***********
//2.Select all the products and the category that the product is in.
//How many collections needed to be joined to recover the data?
 
 //Would need to sort by category first. 
 
db.createView("ProductsInCategory", "product",
    [ { $project:{ "name": " "  , "category": " " } } ]
    );
    
//The view was successfully created but when using find it only gave blanks,
//{ "name": " "  , "category": " " } for each record.
//We would need the product names and the product categories.

//************
//3. Select the product name and the category name of all the products.

db.product.find(
  {},       
  { name : 1  },
  {category: 1});
  
  //Only does the name part and ignores the rest.
  
//************
//4. Select all the products, the categories they belong to, and the company the product is made by. 

db.product.find(
  {},         
  { 
    name : 1  
  },
  {
    category: 1
    },
    {
    company:1
    }
  );

//Problem: Only searches for the name and ignores the rest.

//************
//5. Update the company “Stanley” to “Stanley Black and Decker” and re-run.
//How many documents needed to be updated?

db.product.update({name: "32 Piece Ratchet Set"},{company: "Stanley Black and Decker"});
db.product.update({name: "Hammer"},{company: "Stanley Black and Decker"});

//For this particular set two documents needed updating.
 
// ************
//6. Select all the products in the tools category with a price greater than 10.00. 

db.product.find({
    price: {
        $gt: 10.00
    }
});

//Now only those made by Stanley Black and Decker.

db.product.find({
    company: "Stanley Black and Decker",
    price: {$gt: 10.00},
});

//Problem: This will only return the first record when there are actually two
//that match.

//**************
//7.Delete the crest company.

db.products.remove({ company: "Crest"});

//The command worked but the result was that it removed 0 items.
