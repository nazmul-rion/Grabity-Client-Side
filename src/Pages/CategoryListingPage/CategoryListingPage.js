import React from 'react'
import "./CategoryListingPage.css"
import catIcon from '../../images/RectanglePIC.png'
import CategoryListApi from '../../Hooks/CategoryListApi';
const CategoryListingPage = () => {

    const [categories] = CategoryListApi();

    return (
        <div className='CategoryListingPage'>

            <h2 className='py-3'>Welcome to our Community</h2>

            {/* Category  */}

            <div className="container">
                <div className="row ">

                    {
                        categories.map(SingleCategory => (

                            <div key={SingleCategory._id} className="col-md-4  border-bottom col-6 py-4">
                                <div className="d-flex align-items-center">
                                    <div className="categoryIcon">
                                        <img src={SingleCategory.CategoryIcon} alt="category icon"

                                        />
                                    </div>
                                    <div className="categoryName  ">
                                        <span> {SingleCategory.CategoryName}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    )
}

export default CategoryListingPage