//define a unique identifier for our project
namespace coll.lib;
 
//Context - grouping of our db object - NO SQL (DB agnostic)
//Configuration data, master data, transaction data
context master {
    entity student {
        key id: String(32);
        name: String(80);
        age: Int16;
        semester: String(32);
        grade: Boolean
    }
}
 