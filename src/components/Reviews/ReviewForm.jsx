import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import StarRating from "./StarRating";

const ReviewForm = ({ isFormOpen, onSubmit }) => {
  const {
    register,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    handleSubmit,
  } = useForm();

  const ratingValue = watch("ratings", 0);
  return (
    <div>
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-gray-50 p-6 rounded-2xl space-y-4 border border-gray-100"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Rating
                  </label>
                  {errors.ratings && (
                    <p className="text-error text-sm mt-1">
                      Rating is required
                    </p>
                  )}
                  <div className="flex gap-2">
                    <StarRating
                      onChange={(value) => setValue("ratings", value)}
                      rating={ratingValue}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Review
                </label>
                <textarea
                  {...register("comment", { required: true })}
                  className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 min-h-[100px]"
                  placeholder="What did you think about the product?"
                />
                {errors.comment && (
                  <p className="text-error text-sm">comment is required</p>
                )}
              </div>

              <button
                type="submit"
                className="px-6 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <span className="loading loading-spinner loading-xs mr-2">
                      Submitting...
                    </span>
                  </>
                ) : (
                  "Submit Review"
                )}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReviewForm;
