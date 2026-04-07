import React from "react";
import StarRating from "./StarRating";

const EditReviewForm = ({
  editReview,
  setEditReview,
  onCancelEdit,
  onSaveEdit,
}) => {
  return (
    <div>
      <div className="mt-4 space-y-4 rounded-lg">
        <div>
          <label className="label-text font-medium mb-1 block">Rating</label>
          <StarRating
            rating={editReview.ratings}
            onChange={(value) =>
              setEditReview({ ...editReview, ratings: value })
            }
          />
        </div>

        <div className="flex gap-4 items-start">
          {/* Textarea */}
          <div className="flex-1">
            <label className="label-text font-medium mb-1 block">Comment</label>
            <textarea
              value={editReview.comment}
              onChange={(e) =>
                setEditReview({ ...editReview, comment: e.target.value })
              }
              className="textarea textarea-bordered w-full min-h-25"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 mt-6">
            <button onClick={onSaveEdit} className="btn btn-sm btn-info">
              Save
            </button>
            <button
              type="button"
              onClick={onCancelEdit}
              className="btn btn-sm btn-error"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditReviewForm;
