require 'rails_helper'

RSpec.describe Idea, type: :model do
  context "initializes" do
    it "with a default quality of 0" do
      idea = Idea.create(title: "Swill", body: "Still swill.")
      expect(idea).to be_valid
      expect(idea.quality).to eq(0)
    end

    it "unsuccessfully with no body" do
      idea = Idea.create(title: "Fails")
      expect(idea).not_to be_valid
    end

    it "unsuccessfully with no title" do
      idea = Idea.create(body: "Don't lose your head!")
      expect(idea).not_to be_valid
    end

    it "unsuccessfully with no body or title" do
      idea = Idea.create()
      expect(idea).not_to be_valid
    end
  end
end
