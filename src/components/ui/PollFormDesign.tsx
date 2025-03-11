"use client";
import * as React from "react";
import { RxCross1 } from "react-icons/rx";
import { GoPlus } from "react-icons/go";

const PollFormDesign = () => {
  const [choice, setChoice] = React.useState("");
  const [formValues, setFormValues] = React.useState({
    question: "",
    options: [
      {
        text: "",
      },
    ],
    expireTime: "",
  });

  const handleOptions = () => {
    setFormValues({
      ...formValues,
      options: [
        ...formValues.options,
        {
          text: "",
        },
      ],
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if(choice === "yes-no"){
        formValues.options = [
            {
                text: "Yes",
            },
            {
                text: "No",
            },
        ];
    }

    console.log(formValues);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
        <div className="w-full max-w-md mx-auto p-6 border rounded-lg shadow-lg border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-800">
          <div className="flex justify-center items-center mb-4">
            <h1 className="text-2xl font-bold text-center">A Simple Polls Create</h1>
          </div>

          <form
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <label
              htmlFor="question"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Question
            </label>
            <input
              id="question"
              type="text"
              required
              className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your question"
              // value={question}
              // onChange={(e) => setQuestion(e.target.value)}
            />

            <label
              htmlFor="choice"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Choice
            </label>
            <select
              id="choice"
              required
              className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white"
              value={choice}
              onChange={(e) => setChoice(e.target.value)}
            >
              <option disabled>Select a choice</option>
              <option value="yes-no">Yes/No</option>
              <option value="multiple-choice">Multiple-Choice</option>
            </select>

            {choice === "multiple-choice" && (
              <div>
                <div>
                  <button
                    type="button"
                    onClick={handleOptions}
                    className=" text-white px-2 py-1 bg-gray-600 rounded "
                  >
                    <GoPlus className="h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-2 py-3">
                  {formValues.options.map((option, index) => (
                    <div key={index} className="flex gap-2 relative">
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white"
                        placeholder="Enter choice"
                        value={option.text}
                        onChange={(e) => {
                          const { options } = formValues;
                          options[index].text = e.target.value;
                          setFormValues({
                            ...formValues,
                            options,
                          });
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setFormValues({
                            ...formValues,
                            options: formValues.options.filter(
                              (_, i) => i !== index
                            ),
                          });
                        }}
                        className=" absolute  text-xs top-3 right-2"
                      >
                        <RxCross1 className="h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <label
              htmlFor="expireTime"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Expire Time
            </label>
            <input
              id="expireTime"
              type="datetime-local"
              required
              className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white"
              placeholder="Select date and time"
              value={formValues.expireTime}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  expireTime: e.target.value,
                })
              }
            />
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold rounded bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PollFormDesign;
