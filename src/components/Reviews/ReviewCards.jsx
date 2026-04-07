import { User } from "lucide-react";
import React from "react";
import EditReviewForm from "./EditReviewForm";
import { FaStar } from "react-icons/fa";

const ReviewCards = ({
  reviews,
  user,
  editReview,
  setEditReview,
  setEditingId,
  editingId,
  onCancelEdit,
  onSaveEdit,
  onDeleteClick,
}) => {
  return (
    <div>
      {reviews.map((review) => {
        const isEditing = editingId === review.id;

        return (
          <div key={review.id} className="space-y-8">
            <div className="group">
              <div className="flex gap-4 md:gap-6">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                    <User size={24} />
                  </div>
                </div>

                <div className="flex-1 space-y-2">
                  <h4 className="font-bold text-lg">{review.user.name}</h4>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < review.ratings
                            ? "text-yellow-300"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>

                  {isEditing ? (
                    <EditReviewForm
                      editReview={editReview}
                      setEditReview={setEditReview}
                      onCancelEdit={onCancelEdit}
                      onSaveEdit={() => onSaveEdit(review.id)}
                    />
                  ) : (
                    <p>{review.comment}</p>
                  )}

                  {user && user.id === review.user.id && (
                    <>
                      <button
                        className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 ease-in-out delay-75 hover:bg-blue-700 text-white text-sm font-medium rounded-md -translate-y-1 scale-110 active:scale-95 transition-all duration-150 mr-4"
                        onClick={() => {
                          setEditingId(review.id);
                          setEditReview({
                            ratings: review.ratings,
                            comment: review.comment,
                          });
                        }}
                      >
                        Edit
                      </button>

                      <button
                        className="inline-flex items-center justify-center px-4 py-2 bg-rose-500 ease-in-out delay-75 hover:bg-rose-700 text-white text-sm font-medium rounded-md -translate-y-1 scale-110 active:scale-95 transition-all duration-150"
                        onClick={() => onDeleteClick(review.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewCards;
