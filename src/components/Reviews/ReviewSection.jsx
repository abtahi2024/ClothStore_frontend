import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import { Plus } from "lucide-react";
import ReviewForm from "./ReviewForm";
import { useParams } from "react-router";
import authApiClient from "../../services/auth-api-client";
import ReviewCards from "./ReviewCards";
import apiClient from "../../services/api-client";
import useAuthContext from "../../hooks/useAuthContext";
import { FaStar } from "react-icons/fa";

const ReviewSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { productID } = useParams();
  const [reviews, setReviews] = useState([]);
  const [userCanReview, setUserCanReview] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuthContext();
  const [editReview, setEditReview] = useState({ ratings: 0, comment: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchReviews = async () => {
    setIsLoading(true);
    try {
      const res = await apiClient.get(`/products/${productID}/reviews/`);
      setReviews(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const onSubmit = async (data) => {
    try {
      await authApiClient.post(`/products/${productID}/reviews/`, data);
      fetchReviews();
    } catch (error) {
      console.log(error);
    }
  };

  const checkUserPermission = async () => {
    if (!productID) return;
    try {
      const res = await authApiClient.get(`/orders/has-ordered/${productID}/`);
      setUserCanReview(res.data.hasOrdered);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateReview = async (reviewId) => {
    try {
      await authApiClient.put(
        `/products/${productID}/reviews/${reviewId}/`,
        editReview,
      );
      setEditingId(null);
      fetchReviews();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      await authApiClient.delete(`/products/${productID}/reviews/${reviewId}/`);
      fetchReviews();
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancelEdit = () => {
    setEditingId(null);
  };

  useEffect(() => {
    checkUserPermission();
    fetchReviews();
  }, [productID]);
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12 font-sans text-gray-900">
      {/* Header & Summary */}
      <section className="grid md:grid-cols-3 gap-8 items-start">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">
            Customer Reviews
          </h2>
          <div className="flex items-center gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < 5 ? "text-yellow-300" : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500 font-medium">
                {reviews.length} reviews
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="w-full md:w-auto px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
          >
            <Plus size={18} />
            Write a Review
          </button>
          {userCanReview && (
            <ReviewForm isFormOpen={isFormOpen} onSubmit={onSubmit} />
          )}

          {isLoading ? (
            <div className="flex justify-center py-8">
              <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
          ) : reviews.length === 0 ? (
            <div>
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-2">No Reviews Yet</h3>
            </div>
          ) : (
            <ReviewCards
              reviews={reviews}
              user={user}
              editReview={editReview}
              setEditReview={setEditReview}
              editingId={editingId}
              setEditingId={setEditingId}
              onSaveEdit={handleUpdateReview}
              onDeleteClick={handleDeleteReview}
              onCancelEdit={handleCancelEdit}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default ReviewSection;
